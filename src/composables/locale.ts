import { useLocale as useEPLocale } from 'element-plus'
import Lang from '../locale/en'
import { get } from '../utils/index'
import type { Ref } from 'vue'
import type { TranslatorOption } from 'element-plus'
import type { Language } from 'element-plus/es/locale'

export function useLocale(localeOverrides?: Ref<Language | undefined>) {
  const { t, ...arg } = useEPLocale(localeOverrides)

  function translate(path: string, option?: TranslatorOption) {
    let value = t(path, option)

    if (value === path) {
      value = get(Lang, path, path)
    }

    return value.replace(
      /\{(\w+)\}/g,
      (_, key) => `${option?.[key] ?? `{${key}}`}`,
    )
  }

  return {
    ...arg,
    t: translate,
  }
}
