/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const execa = require('execa')
const { SitemapStream, streamToPromise } = require('sitemap')

const toAbsolute = (p) => path.resolve(__dirname, p).replace(/\\/, '/')

const manifest = require(toAbsolute('dist/static/ssr-manifest.json'))
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = require(toAbsolute('dist/server/entry-server.js'))
const files = fg.sync('docs/docs/**/!(Crud).md')

const writeFileRecursive = function (path, buffer) {
  const lastPath = path.substring(0, path.lastIndexOf('/'))

  fs.mkdir(lastPath, { recursive: true }, () => {
    fs.writeFileSync(path, buffer)
    console.log('pre-rendered:', path)
  })
}

const getUpdatedTime = async (filePath) => {
  const { stdout } = await execa('git', [
    '--no-pager',
    'log',
    '-1',
    '--format=%at',
    filePath,
  ])
  const time = Number.parseInt(stdout, 10) * 1000

  return new Date(time).toISOString()
}

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
    const filePath = `dist/static${url.replace(/\/$/, '/index')}.html`
    const lang = url.match(/^\/([\w|-]*)\//)
    const locale = lang ? lang[1] : 'en'
    const [appHtml, preloadLinks] = await render(url, manifest)
    const html = template
      .replace('en', locale)
      .replace('<title></title>\n', '')
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--app-html-->', appHtml)

    writeFileRecursive(toAbsolute(filePath), html)
    stream.write({
      url: 'element-pro-components' + url,
      lastmod: await getUpdatedTime(path),
      changefreq: 'monthly',
      priority: 0.8,
    })
  }

  stream.end()
  streamToPromise(stream).then((data) => {
    writeFileRecursive(toAbsolute('dist/static/sitemap.xml'), data.toString())
  })
  fs.unlinkSync(toAbsolute('dist/static/ssr-manifest.json'))
})()
