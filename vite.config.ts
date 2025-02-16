import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import container from 'markdown-it-container'
import { VitePWA } from 'vite-plugin-pwa'
import anchor from 'markdown-it-anchor'
import highlight from './build/plugin/highlight'
import snippet from './build/plugin/snippet'
import createDemoContainer from './build/plugin/create-demo'
import createContainer from './build/plugin/create-container'
import externalLinkIcon from './build/plugin/external-link-icon'
import preWrapper from './build/plugin/pre-wrapper'

export default defineConfig({
  root: resolve(__dirname, 'docs'),
  server: { port: 3000 },
  resolve: {
    alias: {
      'element-pro-components/lib': resolve(__dirname, 'src'),
      'element-pro-components': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        highlight,
      },
      markdownItSetup(md) {
        md.use(snippet)
          .use(preWrapper)
          .use(container, 'demo', createDemoContainer(md))
          .use(externalLinkIcon)
          .use(anchor, {
            slugify: (str) => str.replace(/[ ]/g, '-').toLowerCase(),
            permalink: anchor.permalink.ariaHidden({}),
          })
          .use(...createContainer('tip', 'TIP'))
          .use(...createContainer('warning', 'WARNING'))
          .use(...createContainer('danger', 'WARNING'))
          .use(container, 'v-pre', {
            render: (tokens, idx: number) =>
              tokens[idx].nesting === 1 ? '<div v-pre>\n' : '</div>\n',
          })
          .use(container, 'details', {
            render: (tokens, idx: number) => {
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
        id: '/',
        name: 'element-pro-components',
        short_name: 'pro-components',
        description: 'a component library for Vue 3 base on element-plus',
        icons: [
          {
            src: '/element-pro-components/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/element-pro-components/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
      },
    }),
  ],
})
