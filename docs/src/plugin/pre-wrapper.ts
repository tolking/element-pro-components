// copy from [vitepress](https://github.com/vuejs/vitepress)
import MarkdownIt from 'markdown-it'

export default (md: MarkdownIt): void => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const rawCode = fence(...args)
    return `<div class="language-${token.info.trim()}">${rawCode}</div>`
  }
}
