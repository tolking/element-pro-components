const path = require('path')

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
    'reading-progress'
  ],
  chainWebpack: config => {
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
