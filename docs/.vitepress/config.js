const path = require('path')
const container = require('markdown-it-container')
const codeSnippet = require('markdown-it-vuepress-code-snippet-enhanced')
const demo = require('./theme/demo')

module.exports = {
  // NOTE: Only Chinese documentation are provided for the time being, and English documentation may be added in the future
  lang: 'zh-CN',
  base:
    process.env.NODE_ENV === 'development' ? '/' : '/element-pro-components/',
  title: 'element-pro-components',
  description: 'a component library for Vue 3 base on element-plus',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'author', content: 'tolking <w13131wang@gmail.com>' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'element-pro,pro-components,admin,element-plus,components,vue,ui',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/Layout' },
    ],
    sidebar: {
      '/guide/': [
        { text: '快速上手', link: '/guide/' },
        { text: '自定义主题', link: '/guide/theme' },
      ],
      '/components/': [
        {
          text: 'Layout',
          children: [
            { text: 'Layout', link: '/components/Layout' },
            { text: 'Menu', link: '/components/Menu' },
            { text: 'Breadcrumb', link: '/components/Breadcrumb' },
            { text: 'Tabs', link: '/components/Tabs' },
          ],
        },
        {
          text: 'Form',
          children: [
            { text: 'Form', link: '/components/Form' },
            { text: 'Radio', link: '/components/Radio' },
            { text: 'Checkbox', link: '/components/Checkbox' },
            { text: 'Select', link: '/components/Select' },
            { text: 'InputTag', link: '/components/InputTag' },
          ],
        },
        {
          text: 'Table',
          children: [{ text: 'Table', link: '/components/Table' }],
        },
      ],
      '/': [
        {
          text: '指南',
          children: [
            { text: '快速上手', link: '/guide/' },
            { text: '自定义主题', link: '/guide/theme' },
          ],
        },
        {
          text: '组件',
          children: [
            {
              text: 'Layout',
              children: [
                { text: 'Layout', link: '/components/Layout' },
                { text: 'Menu', link: '/components/Menu' },
                { text: 'Breadcrumb', link: '/components/Breadcrumb' },
                { text: 'Tabs', link: '/components/Tabs' },
              ],
            },
            {
              text: 'Form',
              children: [
                { text: 'Form', link: '/components/Form' },
                { text: 'Radio', link: '/components/Radio' },
                { text: 'Checkbox', link: '/components/Checkbox' },
                { text: 'Select', link: '/components/Select' },
                { text: 'InputTag', link: '/components/InputTag' },
              ],
            },
            {
              text: 'Table',
              children: [{ text: 'Table', link: '/components/Table' }],
            },
          ],
        },
      ],
    },
    repo: 'tolking/element-pro-components',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: '最后更新时间',
    editLinkText: '在 GitHub 上编辑此页',
  },
  alias: {
    '/@src': path.resolve(__dirname, '../../src'),
  },
  markdown: {
    config(md) {
      md.use(codeSnippet)
      md.use(container, 'demo', demo)
    },
  },
}
