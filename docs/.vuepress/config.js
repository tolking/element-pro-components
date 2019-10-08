const path = require('path')
const md = require('markdown-it')
const highlight = require('@vuepress/markdown/lib/highlight')

const filterHtml = (demoMap, tokens) => {
  return demoMap ? tokens.filter(item => {
    return item.type === 'html_block' && item.map[0] >= demoMap[0] && item.map[1] <= demoMap[1]
  }) : []
}

module.exports = {
  base: '/element-pro-components/',
  title: 'element-pro-components',
  description: 'element-pro-components',
  dest: 'dist/',
  evergreen: true,
  cache: false,
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'components',
        path: '/components/',
        children: [
          '/components/',
          '/components/Layout',
          '/components/Menu',
          '/components/Breadcrumb',
          '/components/Tabs',
          '/components/Link',
          '/components/Svg',

          '/components/ImgCropper',
          '/components/InputTag',
        ]
      }
    ],
    lastUpdated: '最后更新时间',
    repo: 'tolking/element-pro-components',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页'
  },
  plugins: [
    'reading-progress',
    ['container', {
      type: 'demo',
      render: (tokens, idx) => {
        const { nesting, info = '', map } = tokens[idx]

        if (nesting === -1) {
          return '</template></pro-code>'
        }

        const matchedInfo = info.trim().match(/^demo\s+(.*)$/)
        const description = matchedInfo && matchedInfo[1]
        const descTemplate = md().render(description || '')
        let str = ''
        let lastLine = ''
        const demoTokens = filterHtml(map, tokens)

        demoTokens.forEach(item => {
          const { map } = item
          const delta = map[0] - (lastLine || map[1])
          if (delta > 0) {
            str += '\n'.repeat(delta)
          }
          str += item.content
          lastLine = map[1]
        })

        return `
          <pro-code>
            <span slot="description">${descTemplate}</span>
            <template slot="code">${highlight(str, 'vue')}</template>
            <template>
        `
      }
    }],
  ],
  chainWebpack: config => {
    config.resolve.alias.set('element-pro-components', path.resolve(__dirname, '../../'))
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './public/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './public/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  }
}
