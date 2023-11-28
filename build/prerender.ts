import { readFileSync } from 'node:fs'
import fg from 'fast-glob'
import { SitemapStream, streamToPromise } from 'sitemap'
import {
  toAbsolute,
  getFileUpdatedTime,
  writeFileRecursive,
  rmdirRecursive,
} from './utils'

const manifest = JSON.parse(
  readFileSync(toAbsolute('../dist/.vite/ssr-manifest.json'), 'utf-8'),
)
const template = readFileSync(toAbsolute('../dist/index.html'), 'utf-8')
const { render } = await import(toAbsolute('../dist/.cache/entry-server.js'))
const files = fg.sync('docs/**/*.md')

;(async () => {
  const stream = new SitemapStream({ hostname: 'https://tolking.github.io' })

  for (const path of files) {
    const url = path
      .replace(/^docs/, '')
      .replace(/\.(vue|md)$/, '')
      .replace(/index$/, '')
      .replace(/\/([^/]*)$/, (item) =>
        item.replace(/\B([A-Z])/g, '-$1').toLowerCase(),
      )
    const filePath = toAbsolute(`../dist${url.replace(/\/$/, '/index')}.html`)
    const lang = url.match(/^\/([\w|-]*)\//)
    const locale = lang ? lang[1] : 'en'
    const [appHtml, preloadLinks, teleports] = await render(url, manifest)
    const html = template
      .replace('en', locale)
      .replace('<title></title>\n', '')
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--app-html-->', appHtml)
      .replace(/(\n|\r\n)\s*<!--app-teleports-->/, teleports)

    writeFileRecursive(filePath, html)
    console.log('pre-rendered:', filePath)
    stream.write({
      url: 'element-pro-components' + url,
      lastmod: await getFileUpdatedTime(path),
      changefreq: 'monthly',
      priority: 0.8,
    })
  }

  stream.end()
  streamToPromise(stream).then((data) => {
    const filePath = toAbsolute('../dist/sitemap.xml')
    writeFileRecursive(filePath, data.toString())
    console.log('build-sitemap:', filePath)
  })
  rmdirRecursive(toAbsolute('../dist/.vite'))
  rmdirRecursive(toAbsolute('../dist/.cache'))
})()
