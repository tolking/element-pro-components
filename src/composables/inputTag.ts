import { computed, Ref, ref } from 'vue'
import type { IInputTagProps } from '../types/index'

export function useInputTag(
  props: Readonly<IInputTagProps>,
  emit: (event: 'update:modelValue', ...args: unknown[]) => void
): {
  input: Ref<string>
  list: Ref<string[]>
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
    add,
    close,
    keyup,
  }
}
