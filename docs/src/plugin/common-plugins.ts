import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import container from 'markdown-it-container'
import codeSnippet from 'markdown-it-vuepress-code-snippet-enhanced'
import demo from './demo'
import createContainer from './create-container'
import preWrapper from './pre-wrapper'
import type Token from 'markdown-it/lib/token'

const plugins = [
  vue({
    include: [/\.vue$/, /\.md$/],
  }),
  Markdown({
    markdownItSetup(md) {
      md.use(codeSnippet)
        .use(preWrapper)
        .use(container, 'demo', demo)
        .use(...createContainer('tip', 'TIP'))
        .use(...createContainer('warning', 'WARNING'))
        .use(...createContainer('danger', 'WARNING'))
        .use(container, 'v-pre', {
          render: (tokens: Token[], idx: number) =>
            tokens[idx].nesting === 1 ? '<div v-pre>\n' : '</div>\n',
        })
    },
  }),
]

export default plugins
