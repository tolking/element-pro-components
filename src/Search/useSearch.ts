import { computed, useSlots } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useLocale } from '../composables/index'
import { useFormInjectEmits } from '../Form/useForm'
import type { ComputedRef, Ref, Slot } from 'vue'
import type {
  IFormColumns,
  IFormExpose,
  IFormMenuColumns,
  IFormSubmit,
  UseFormInjectEmitsCallback,
} from '../Form/type'
import type { ISearchProps, ISearchEmits, ISearchConfigProp } from './type'

export const searchMenu: IFormMenuColumns = {
  submit: true,
  submitProps: { type: 'primary' },
  reset: true,
}

export function useSearchMenu(
  props: Pick<ISearchProps, 'menu'>,
): ComputedRef<IFormMenuColumns> {
  const { t } = useLocale()

  return computed(() => {
    const menu = {
      ...searchMenu,
      searchMenu: t('pro.search.submit'),
      resetText: t('pro.search.reset'),
      prevText: t('pro.search.prev'),
      nextText: t('pro.search.next'),
    }

    return props.menu ? Object.assign({}, menu, props.menu) : menu
  })
}

export function useSearch(
  props: ISearchProps,
  emit: ISearchEmits,
): {
  columns: ComputedRef<IFormColumns | undefined>
  submitForm: IFormSubmit
} & UseFormInjectEmitsCallback {
  const defaultConfig: ISearchConfigProp = {
    xs: 24,
    md: 12,
    lg: 8,
    xl: 6,
  }

  const injectEmits = useFormInjectEmits(emit)

  const columns = computed(() => {
    if (props.inline) return props.columns
    return withColProps(props.columns)
  })

  const submitForm: IFormSubmit = (done, isValid, invalidFields) => {
    emit('submit', done, isValid, invalidFields)
  }

  function withColProps(columns?: IFormColumns) {
    if (!columns) return undefined

    return columns.map((item) => {
      if (item.children?.length) {
        item.children = withColProps(item.children)
      }

      return {
        ...defaultConfig,
        ...props.config,
        ...item,
      }
    })
  }

  return {
    ...injectEmits,
    columns,
    submitForm,
  }
}

export function useSearchSlots() {
  const slots = useSlots()
  const searchSlots: Record<string, Slot | undefined> = {}

  for (const key in slots) {
    const item = slots[key]
    const _key = key.replace(/^search-/, 'form-')

    searchSlots[_key] = item
  }

  return searchSlots
}

export function useSearchMenuWidth(ref: Ref<IFormExpose>) {
  const menuRef = computed(() => {
    const el = (ref.value as unknown as { $el: HTMLFormElement }).$el
    return el?.querySelector<HTMLElement>('.pro-form-menu')
  })

  useResizeObserver(menuRef, () => {
    if (!menuRef.value) return
    const menuContent = menuRef.value.querySelector('div')
    const width = menuContent?.getBoundingClientRect().width

    if (width) {
      menuRef.value.style.minWidth = `${width}px`
    }
  })
}
