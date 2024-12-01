import { computed, useSlots } from 'vue'
import { useLocale } from 'element-plus'
import { useFormInjectEmits } from '../Form/useForm'
import type { ComputedRef, Slot } from 'vue'
import type {
  IFormColumns,
  IFormMenuColumns,
  IFormSubmit,
  UseFormInjectEmitsCallback,
} from '../Form/type'
import type { ISearchProps, ISearchEmits, ISearchConfigProp } from './type'

export const searchMenu: IFormMenuColumns = {
  submit: true,
  submitText: 'Search',
  submitProps: { type: 'primary' },
  reset: true,
  resetText: 'Reset',
  prevText: 'Prev',
  nextText: 'Next',
}

export function useSearchMenu(
  props: Pick<ISearchProps, 'menu'>,
): ComputedRef<IFormMenuColumns> {
  return computed(() => {
    const menu = { ...searchMenu }
    const { t } = useLocale()
    const submitText = t('pro.search.submit')
    const resetText = t('pro.search.reset')
    const prevText = t('pro.search.prev')
    const nextText = t('pro.search.next')

    if (submitText && submitText !== 'pro.search.submit') {
      menu.submitText = submitText
    }
    if (resetText && resetText !== 'pro.search.reset') {
      menu.resetText = resetText
    }
    if (prevText && prevText !== 'pro.search.prev') {
      menu.prevText = prevText
    }
    if (nextText && nextText !== 'pro.search.next') {
      menu.nextText = nextText
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
