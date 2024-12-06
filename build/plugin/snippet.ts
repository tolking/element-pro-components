// copy from [vitepress](https://github.com/vuejs/vitepress)
// MIT License Copyright (c) 2019-present, Yuxi (Evan) You
import { existsSync, readFileSync } from 'node:fs'
import MarkdownIt from 'markdown-it'

export default (md: MarkdownIt): void => {
  md.block.ruler.before(
    'fence',
    'snippet',
    (state, startLine, endLine, silent) => {
      const CH = '<'.charCodeAt(0)
      const pos = state.bMarks[startLine] + state.tShift[startLine]
      const max = state.eMarks[startLine]

      // if it's indented more than 3 spaces, it should be a code block
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false
      }

      for (let i = 0; i < 3; ++i) {
        const ch = state.src.charCodeAt(pos + i)
        if (ch !== CH || pos + i >= max) return false
      }

      if (silent) {
        return true
      }

      const start = pos + 3
      const end = state.skipSpacesBack(max, pos)
      const rawPath = state.src
        .slice(start, end)
        .trim()
        .replace(/^@/, process.cwd())
      const content = existsSync(rawPath)
        ? readFileSync(rawPath).toString()
        : 'Not found: ' + rawPath
      const meta = rawPath.replace(rawPath, '')

      state.line = startLine + 1

      const token = state.push('fence', 'code', 0)
      token.info = rawPath.split('.').pop() + meta
      token.content = content
      token.markup = '```'
      token.map = [startLine, startLine + 1]

      return true
    },
  )
}
