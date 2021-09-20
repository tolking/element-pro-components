import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import container from 'markdown-it-container'
import { VitePWA } from 'vite-plugin-pwa'
import anchor from 'markdown-it-anchor'
import highlight from './docs/src/plugin/highlight'
import snippet from './docs/src/plugin/snippet'
import demo from './docs/src/plugin/demo'
import createContainer from './docs/src/plugin/create-container'
import preWrapper from './docs/src/plugin/pre-wrapper'
import type Token from 'markdown-it/lib/token'

export default defineConfig({
  root: resolve(__dirname, 'docs'),
  base: '/element-pro-components/',
  resolve: {
    alias: {
      '/@src': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        manualChunks: {
          'modules-vue': ['vue', 'vue-router'],
          'modules-element-plus': ['element-plus'],
        },
      },
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
          .use(container, 'demo', demo)
          .use(anchor, {
            permalink: anchor.permalink.ariaHidden({}),
          })
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
        name: 'pro-components',
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
