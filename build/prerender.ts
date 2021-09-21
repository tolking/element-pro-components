import { readFileSync, unlinkSync } from 'fs'
import fg from 'fast-glob'
import { SitemapStream, streamToPromise } from 'sitemap'
import { toAbsolute, getFileUpdatedTime, writeFileRecursive } from './utils'
import manifest from '../dist/static/ssr-manifest.json'
import { render } from '../dist/server/entry-server'

const template = readFileSync(toAbsolute('../dist/static/index.html'), 'utf-8')
const files = fg.sync('docs/docs/**/*.md')

;(async () => {
  const stream = new SitemapStream({ hostname: 'https://tolking.github.io' })

  for (const path of files) {
    const url = path
      .replace(/^docs\/docs/, '')
      .replace(/\.(vue|md)$/, '')
      .replace(/index$/, '')
      .replace(/\/([^/]*)$/, (item) =>
        item.replace(/\B([A-Z])/g, '-$1').toLowerCase()
      )
    const filePath = toAbsolute(
      `../dist/static${url.replace(/\/$/, '/index')}.html`
    )
    const lang = url.match(/^\/([\w|-]*)\//)
    const locale = lang ? lang[1] : 'en'
    const [appHtml, preloadLinks] = await render(url, manifest)
    const html = template
      .replace('en', locale)
      .replace('<title></title>\n', '')
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--app-html-->', appHtml)

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
    const filePath = toAbsolute('../dist/static/sitemap.xml')
    writeFileRecursive(filePath, data.toString())
    console.log('build-sitemap:', filePath)
  })
  unlinkSync(toAbsolute('../dist/static/ssr-manifest.json'))
})()
