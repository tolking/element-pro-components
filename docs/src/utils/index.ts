import { name } from '../../../package.json'

export const langs = [
  { key: 'en-US', value: 'English' },
  { key: 'zh-CN', value: '中文' },
]

export function getTitle(title?: string): string {
  return (title ? title + ' | ' : '') + name
}
