import helper from 'components-helper'
import { name, version } from '../package.json'
import { hyphenate, toAbsolute } from './utils'
import type {
  ReComponentName,
  ReWebTypesSource,
  ReDocUrl,
  ReAttribute,
} from 'components-helper'

const reComponentName: ReComponentName = (title) => {
  return 'pro-' + hyphenate(title)
}

const reWebTypesSource: ReWebTypesSource = (title) => {
  const symbol = 'Pro' + title
  return { symbol }
}

const reDocUrl: ReDocUrl = (fileName, header) => {
  const docs =
    'https://tolking.github.io/element-pro-components/en-US/components/'
  const _header = header ? header.replace(/[ ]+/g, '-') : undefined
  return docs + fileName + (_header ? '#' + header : '')
}

const reAttribute: ReAttribute = (value, key) => {
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

helper({
  name,
  version,
  entry: toAbsolute('../docs/docs/en-US/components/*.md'),
  outDir: toAbsolute('../lib'),
  reComponentName,
  reDocUrl,
  reAttribute,
  reWebTypesSource,
  titleRegExp: /#+\s+(.*)\n+>\s*([^(#|\n)]*)/g,
  tableRegExp:
    /#+\s+(.*\s*Props|.*\s*Events|.*\s*Slots|.*\s*Directives)\s*\n+(\|?.+\|.+)\n\|?\s*:?-+:?\s*\|.+((\n\|?.+\|.+)+)/g,
})
