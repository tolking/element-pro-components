import type MarkdownIt from 'markdown-it'

export default (md: MarkdownIt): void => {
  let hasExternalLink = false

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const href = token.attrGet('href')

    token.attrJoin('class', 'md-link')
    if (href && /^((ht|f)tps?):\/\/?/.test(href)) {
      hasExternalLink = true
    }

    return self.renderToken(tokens, idx, options)
  }

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    if (hasExternalLink) {
      hasExternalLink = false
      return `<icon-external-link class="link-icon" />${self.renderToken(
        tokens,
        idx,
        options
      )}`
    }

    return self.renderToken(tokens, idx, options)
  }
}
