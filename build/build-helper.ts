import helper from 'components-helper'
import { name, version } from '../package.json'
import { hyphenate } from './utils'

helper({
  name,
  version,
  entry: 'docs/docs/en-US/components/*.md',
  outDir: 'lib',
  reComponentName,
  reDocUrl,
  reAttribute,
  reWebTypesSource,
  titleRegExp: '#+\\s+(.*)\n+>\\s*([^(#|\\n)]*)',
  tableRegExp:
    '#+\\s+(.*\\s*Props|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
})

function reComponentName(title: string) {
  return 'pro-' + hyphenate(title)
}

function reWebTypesSource(title: string) {
  const symbol = 'Pro' + title
  return { symbol }
}

function reDocUrl(fileName: string, header: string) {
  const docs =
    'https://tolking.github.io/element-pro-components/en-US/components/'
  const _header = header ? header.replace(/[ ]+/g, '-') : undefined
  return docs + fileName + (_header ? '#' + header : '')
}

function reAttribute(value: string, key: string) {
  if (key === 'Name' && /^(-|—)$/.test(value)) {
    return 'default'
  } else if (key === 'Name' && /v-model:(.+)/.test(value)) {
    const _value = value.match(/v-model:(.+)/)
    return _value ? _value[1] : undefined
  } else if (key === 'Name' && /v-model/.test(value)) {
    return 'model-value'
  } else if (key === 'Name') {
    return value.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  } else if (key === 'Type') {
    return value
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (value === '' || /^(-|—)$/.test(value)) {
    return undefined
  } else if (key === 'Options') {
    return /\[.+\]\(.+\)/.test(value) || /^\*$/.test(value)
      ? undefined
      : value.replace(/`/g, '')
  } else {
    return value
  }
}
