import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { UnknownObject } from '../types/index'
import type { IArrayFormContentProps, IArrayFormEmits } from './index'

export function useArrayForm(
  props: Pick<IArrayFormContentProps, 'modelValue' | 'columns' | 'max'>,
  emit: IArrayFormEmits
): {
  showAdd: ComputedRef<boolean>
  add: () => void
  del: (index: number) => void
  update: (value: UnknownObject, index: number) => void
} {
  const showAdd = computed<boolean>(() => {
    return props.max ? props.max > props.modelValue.length : true
  })

  function add() {
    let _model = [...props.modelValue]

    if (props.modelValue) {
      _model.push({})
    } else {
      _model = [{}]
    }
    emit('update:modelValue', _model)
  }

  function del(index: number) {
    const _model = [...props.modelValue]

    _model.splice(index, 1)
    emit('update:modelValue', _model)
  }

  function update(value: UnknownObject, index: number) {
    const _model = [...props.modelValue]

    _model[index] = value
    emit('update:modelValue', _model)
  }

  return {
    showAdd,
    add,
    del,
    update,
  }
}
