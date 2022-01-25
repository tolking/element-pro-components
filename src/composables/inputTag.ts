import { computed, Ref, ref } from 'vue'
import type { IInputTagProps, IInputTagEmits } from '../InputTag/index'
import type { IAutocompleteTagProps } from '../AutocompleteTag/index'

export function useInputTag(
  props: IInputTagProps | IAutocompleteTagProps,
  emit: IInputTagEmits
): {
  input: Ref<string>
  list: Ref<string[]>
  disabled: Ref<boolean | undefined>
  add: () => void
  close: (index: number) => void
  keyup: (event: KeyboardEvent) => void
} {
  const input = ref('')
  const list = computed(() => props.modelValue || [])
  const triggerKey = computed(() => {
    const key = props.trigger || 'space'
    return { space: ' ', enter: 'Enter' }[key]
  })
  const disabled = computed(() => {
    if (props.disabled === undefined && props.max !== undefined) {
      return (props.modelValue?.length || 0) >= props.max
    }
    return props.disabled
  })

  function add() {
    if (input.value.trim()) {
      const _list = [...list.value, input.value]
      emit('update:modelValue', _list)
      input.value = ''
    }
  }

  function close(index: number) {
    const _list = [...list.value]
    _list.splice(index, 1)
    emit('update:modelValue', _list)
  }

  function keyup(event: KeyboardEvent) {
    event.key === triggerKey.value && add()
  }

  return {
    input,
    list,
    disabled,
    add,
    close,
    keyup,
  }
}
