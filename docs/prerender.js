/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')

const toAbsolute = (p) => path.resolve(__dirname, p).replace(/\\/, '/')

const manifest = require(toAbsolute('dist/static/ssr-manifest.json'))
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = require(toAbsolute('dist/server/entry-server.js'))

const writeFileRecursive = function (path, buffer) {
  const lastPath = path.substring(0, path.lastIndexOf('/'))

  fs.mkdir(lastPath, { recursive: true }, () => {
    fs.writeFileSync(path, buffer)
    console.log('pre-rendered:', path)
  })
}

const routesToPrerender = fg
  .sync('docs/docs/**/!(ColumnSetting|Crud|TreeSelect).md') // TODO: error when used ElTree
  .map((item) =>
    item
      .replace(/^docs\/docs/, '')
      .replace(/\.(vue|md)$/, '')
      .replace(/index$/, '')
      .replace(/\/([^/]*)$/, (item) =>
        item.replace(/\B([A-Z])/g, '-$1').toLowerCase()
      )
  )

;(async () => {
  for (const url of routesToPrerender) {
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
  }

  fs.unlinkSync(toAbsolute('dist/static/ssr-manifest.json'))
})()
