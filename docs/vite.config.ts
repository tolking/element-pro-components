import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import container from 'markdown-it-container'
import codeSnippet from 'markdown-it-vuepress-code-snippet-enhanced'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const demo = require('./src/plugin/demo')

export default defineConfig({
  resolve: {
    alias: {
      '/@src': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(codeSnippet)
        md.use(container, 'demo', demo)
      },
    }),
  ],
})
