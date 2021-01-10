import { Ref, ref, unref } from 'vue'

export function useInputTag(
  emit: (event: 'update:modelValue', ...args: unknown[]) => void,
  modelValue?: Ref<string[] | undefined>
): {
  input: Ref<string>
  add: () => void
  close: (index: number) => void
} {
  const input = ref('')

  function add() {
    if (input.value.trim()) {
      const _modelValue = unref(modelValue) || []
      emit('update:modelValue', [..._modelValue, input.value])
      input.value = ''
    }
  }

  function close(index: number) {
    const _modelValue = unref(modelValue) || []
    _modelValue.splice(index, 1)
    emit('update:modelValue', _modelValue)
  }

  return {
    input,
    add,
    close,
  }
}
