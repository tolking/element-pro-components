module.exports = {
  base: '/element-pro-components/',
  title: 'element-pro-components',
  description: 'element-pro-components',
  dest: 'dist/',
  evergreen: true,
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
          '/components/Link',

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
    'reading-progress'
  ]
}
