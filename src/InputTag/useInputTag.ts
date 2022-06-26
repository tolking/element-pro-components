import { computed, Ref, ref } from 'vue'
import { reactiveOmit, reactivePick } from '@vueuse/core'
import { useAttrs, useDisabled, useSize } from 'element-plus'
import { inputTagCommonProps } from '../InputTag/props'
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

type CommonKeys = Array<keyof typeof inputTagCommonProps>

export interface InputTagCore {
  attrs: Ref<Record<string, unknown>>
  size: Ref<ComponentSize | undefined>
  tagProps: Partial<IInputTagProps>
  inputProps: Partial<IInputTagProps>
  inputRef: Ref<InputInstance | AutocompleteInstance | undefined>
  input: Ref<string>
  focused: Ref<boolean>
  list: Ref<string[]>
  disabled: Ref<boolean | undefined>
  closable: Ref<boolean>
  add: (isBlur?: boolean) => void
  change: (value: string) => void
  close: (index: number) => void
  keyup: (event: KeyboardEvent) => void
  focus: () => void
}

export function useInputTag(
  props: IInputTagProps | IAutocompleteTagProps,
  emit: IInputTagEmits | IAutocompleteTagEmits
): InputTagCore {
  const attrs = useAttrs()
  const size = useSize()
  const tagProps = reactivePick(
    props,
    'type',
    'hit',
    'color',
    'effect',
    'disableTransitions'
  )
  const commonKeys = Object.keys(inputTagCommonProps) as CommonKeys
  const inputProps = reactiveOmit(props, ...commonKeys, 'size')
  const inputRef = ref<InputInstance | AutocompleteInstance | undefined>()
  const input = ref('')
  const focused = ref(false)
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
    return !(props.readonly || disabled.value) ?? true
  })

  function add(isBlur = false) {
    if (isBlur) {
      focused.value = false
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
    emit('input', value)
  }

  function close(index: number) {
    emit('tag-remove', list.value[index])
    const _list = [...list.value]
    _list.splice(index, 1)
    emit('update:modelValue', _list)
  }

  function keyup(event: KeyboardEvent) {
    event.key === triggerKey.value && add()
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
