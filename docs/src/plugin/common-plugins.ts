import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import container from 'markdown-it-container'
import { VitePWA } from 'vite-plugin-pwa'
import highlight from './highlight'
import snippet from './snippet'
import demo from './demo'
import createContainer from './create-container'
import preWrapper from './pre-wrapper'
import type Token from 'markdown-it/lib/token'

const plugins = [
  vue({
    include: [/\.vue$/, /\.md$/],
  }),
  Markdown({
    markdownItOptions: {
      html: true,
      linkify: true,
      typographer: true,
      highlight,
    },
    markdownItSetup(md) {
      md.use(snippet)
        .use(preWrapper)
        .use(container, 'demo', demo)
        .use(...createContainer('tip', 'TIP'))
        .use(...createContainer('warning', 'WARNING'))
        .use(...createContainer('danger', 'WARNING'))
        .use(container, 'v-pre', {
          render: (tokens: Token[], idx: number) =>
            tokens[idx].nesting === 1 ? '<div v-pre>\n' : '</div>\n',
        })
        .use(container, 'details', {
          render: (tokens: Token[], idx: number) => {
            const info = tokens[idx].info.trim().slice(7).trim() // 7 = 'details'.length
            return tokens[idx].nesting === 1
              ? `<details class="custom-block details">${
                  info ? `<summary>${info}</summary>` : ''
                }\n`
              : '</details>'
          },
        })
    },
  }),
  VitePWA({
    manifest: {
      description: 'a component library for Vue 3 base on element-plus',
      icons: [
        {
          src: 'logo.svg',
          sizes: '48x48 72x72 96x96 128x128 256x256',
        },
      ],
    },
  }),
]

export default plugins
