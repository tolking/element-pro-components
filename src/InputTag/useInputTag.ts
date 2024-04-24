import { computed, Ref, ref, UnwrapNestedRefs } from 'vue'
import { useAttrs, useDisabled, useSize } from 'element-plus'
import { useSplitReactive } from '../composables/index'
import { tagKeys } from './props'
import type {
  ComponentSize,
  InputInstance,
  AutocompleteInstance,
} from 'element-plus'
import type { IInputTagProps, IInputTagEmits } from '../InputTag/index'
import type {
  IAutocompleteTagProps,
  IAutocompleteTagEmits,
} from '../AutocompleteTag/index'
import type { TagKeys } from './props'

type InputKeys<T> = Array<
  Exclude<keyof T, TagKeys[number] | 'modelValue' | 'max' | 'trigger' | 'size'>
>

export interface InputTagCore<T> {
  attrs: Ref<Record<string, unknown>>
  size: Ref<ComponentSize | undefined>
  tagProps: UnwrapNestedRefs<Pick<T, Extract<TagKeys, (keyof T)[]>[number]>>
  inputProps: UnwrapNestedRefs<
    Pick<
      T,
      Exclude<
        keyof T,
        | 'type'
        | 'disableTransitions'
        | 'hit'
        | 'color'
        | 'size'
        | 'effect'
        | 'round'
        | 'modelValue'
        | 'max'
        | 'trigger'
      >
    >
  >
  inputRef: Ref<InputInstance | AutocompleteInstance | undefined>
  input: Ref<string>
  focused: Ref<boolean>
  selectedTag: Ref<number | undefined>
  list: Ref<string[]>
  disabled: Ref<boolean | undefined>
  closable: Ref<boolean>
  add: (isBlur?: unknown) => void
  change: (value: string) => void
  close: (index: number) => void
  keyup: (event: KeyboardEvent) => void
  focus: () => void
}

export function useInputTag<T extends IInputTagProps | IAutocompleteTagProps>(
  props: T,
  emit: IInputTagEmits | IAutocompleteTagEmits,
): InputTagCore<T> {
  const attrs = useAttrs()
  const size = useSize()

  const inputKeys = Object.keys(props).filter(
    (key) =>
      ![...tagKeys, 'modelValue', 'max', 'trigger', 'size'].includes(key),
  ) as InputKeys<T>
  const [tagProps, inputProps] = useSplitReactive(props, tagKeys, inputKeys)

  const inputRef = ref<InputInstance | AutocompleteInstance | undefined>()
  const input = ref('')
  const focused = ref(false)
  const selectedTag = ref<number | undefined>()
  const list = computed(() => props.modelValue || [])
  const triggerKey = computed(() => {
    const key = props.trigger
    return { space: ' ', enter: 'Enter' }[key]
  })
  const disabled = computed(() => {
    if (!props.disabled && props.max !== undefined) {
      return (props.modelValue?.length || 0) >= props.max
    }
    return props.disabled
  })
  const closable = computed(() => {
    const disabled = useDisabled()
    return !(props.readonly || disabled.value)
  })

  function add(isBlur?: unknown) {
    if (isBlur === true) {
      focused.value = false
      selectedTag.value = undefined
    }
    if (input.value.trim()) {
      const _list = [...list.value, input.value]
      emit('tag-add', input.value)
      emit('update:modelValue', _list)
      input.value = ''
    }
  }

  function change(value: string) {
    input.value = value
    selectedTag.value = undefined
    emit('input', value)
  }

  function close(index: number) {
    inputRef.value?.focus()
    emit('tag-remove', list.value[index])
    const _list = [...list.value]
    _list.splice(index, 1)
    emit('update:modelValue', _list)
    selectedTag.value = undefined
  }

  function keyup(event: KeyboardEvent) {
    if (event.key === 'Enter' && selectedTag.value !== undefined) {
      close(selectedTag.value)
    } else if (
      event.key === 'Backspace' &&
      !input.value &&
      list.value?.length
    ) {
      if (selectedTag.value === undefined) {
        selectedTag.value = list.value.length - 1
      } else {
        close(selectedTag.value)
      }
    } else if (event.key === triggerKey.value) {
      add()
    }
  }

  function focus() {
    focused.value = true
  }

  return {
    attrs,
    size,
    tagProps,
    inputProps,
    inputRef,
    input,
    focused,
    selectedTag,
    list,
    disabled,
    closable,
    add,
    change,
    close,
    keyup,
    focus,
  }
}
