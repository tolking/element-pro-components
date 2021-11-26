import { existsSync, readFileSync } from 'fs'
import markdown from 'markdown-it'
import { camelize } from '../utils'
import highlight from './highlight'
import type Token from 'markdown-it/lib/token'

let scripts: string[] = []
let count = 0
let isFirst = true

export default {
  render: (tokens: Token[], idx: number): string => {
    const { nesting, info = '' } = tokens[idx]

    if (nesting === 1) {
      if (isFirst) {
        scripts = []
        isFirst = false
        count = tokens.filter((item) => {
          return item.markup === ':::' && /^\s*demo/.test(item.info)
        }).length
      }

      const matchedInfo = info.trim().match(/^demo\s+(.*)$/)
      const description = matchedInfo && matchedInfo[1]
      const descTemplate = markdown().render(description || '')
      const link = tokens[idx + 2].content.trim()
      const componentName = link.replace(/^@\/demo\/(.*).vue/, (_, $1) => {
        return $1.replaceAll('/', '-').toLocaleLowerCase()
      })
      const rawPath = link.replace(/^@/, process.cwd())
      const content = existsSync(rawPath)
        ? readFileSync(rawPath).toString()
        : 'Not found: ' + rawPath

      scripts.push(`import ${camelize(componentName)} from '${rawPath}'`)

      return `
      <pro-code>
        ${
          componentName
            ? `<template #source><${componentName}/></template>`
            : ''
        }
        ${
          description ? `<template #description>${descTemplate}</template>` : ''
        }
        <template #code>${highlight(content, 'vue')}</template>
      `
    } else {
      if (count && scripts.length === count) {
        isFirst = true
        return `
        </pro-code>
        <script setup>
          ${scripts.join('\n')}
        </script>
        `
      } else {
        return '</pro-code>'
      }
    }
  },
}
