const path = require('path')
const markdown = require('markdown-it')
const container = require('markdown-it-container')
const { highlight } = require('vitepress/dist/node/markdown/plugins/highlight')

const filterHtml = (demoMap, tokens) => {
  return demoMap
    ? tokens.filter((item) => {
        return (
          item.type === 'html_block' &&
          item.map[0] >= demoMap[0] &&
          item.map[1] <= demoMap[1]
        )
      })
    : []
}

module.exports = {
  lang: 'zh-CN',
  base:
    process.env.NODE_ENV === 'development' ? '/' : '/element-pro-components/',
  title: 'element-pro-components',
  description: 'a component library for Vue 3 base on element-plus',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
    ],
    sidebar: 'auto',
    repo: 'tolking/element-pro-components',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: '最后更新时间',
    editLinkText: '在 GitHub 上编辑此页',
  },
  alias: {
    '/element-pro/': path.resolve(__dirname, '../../src'),
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(container, 'demo', {
        render: (tokens, idx) => {
          const { nesting, info = '', map } = tokens[idx]

          if (nesting === -1) {
            return '</pro-code>'
          }

          const matchedInfo = info.trim().match(/^demo\s+(.*)$/)
          const description = matchedInfo && matchedInfo[1]
          const descTemplate = markdown().render(description || '')
          let str = ''
          let lastLine = ''
          const demoTokens = filterHtml(map, tokens)

          demoTokens.forEach((item) => {
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
            <transition #description>${descTemplate}</transition>
            <template #code>${highlight(str, 'vue')}</template>
          `
        },
      })
    },
  },
}
