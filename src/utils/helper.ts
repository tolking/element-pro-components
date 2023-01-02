import type { MaybeArray } from '../types/index'

interface ResolverOptions {
  /**
   * style file suffix for import component
   *
   * @default 'js'
   *
   * 'js' - component styles and styles referenced by component will be imported automatically
   * 'cjs' - same like 'js'. but it is in commonjs format, you may need to configure it in SSR or SSG
   * 'css' - automatically import component styles only
   */
  importStyle?: 'js' | 'cjs' | 'css'
  /** exclude components that do not require automatic import */
  exclude?: RegExp
  /** a list of component names that have no styles, so resolving their styles file should be prevented */
  noStylesComponents?: string[]
}

interface ComponentInfo {
  as?: string
  name?: string
  from: string
  sideEffects?: MaybeArray<string>
}

export function ElementProResolver(options: ResolverOptions = {}) {
  const { importStyle = 'js', exclude } = options
  const noStylesComponents = [
    'ProArrayForm',
    'ProCollapseForm',
    'ProFormComponent',
    'ProFormItem',
    'ProFormList',
    'ProGroupForm',
    'ProStepsForm',
    'ProTabsForm',
    ...(options.noStylesComponents || []),
  ]

  return (name: string) => {
    if (exclude && exclude.test(name)) return
    if (/^Pro[A-Z]\w+/.test(name)) {
      const fileName = name
        .slice(3)
        .replace(/\B([A-Z])/g, '-$1')
        .toLocaleLowerCase()
      const result: ComponentInfo = {
        from: 'element-pro-components',
        name,
      }

      if (!noStylesComponents.includes(name)) {
        result.sideEffects = `element-pro-components/lib/styles/${fileName}.${importStyle}`
      }
      return result
    }
  }
}
