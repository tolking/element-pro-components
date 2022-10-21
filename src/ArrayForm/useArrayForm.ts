import { computed, inject, provide } from 'vue'
import type { ComputedRef, InjectionKey } from 'vue'
import type { UnknownObject } from '../types/index'
import type {
  IArrayFormContentProps,
  IArrayFormContext,
  IArrayFormEmits,
  IArrayFormContentEmits,
} from './index'

export const arrayFormContentKey: InjectionKey<IArrayFormContext> =
  Symbol('arrayFormKey')

export function useArrayFormProvide(emit: IArrayFormContentEmits) {
  provide(arrayFormContentKey, { add, remove })

  function add(indexes: number[]) {
    emit('add', indexes)
  }

  function remove(indexes: number[]) {
    emit('remove', indexes)
  }
}

export function useArrayFormInject() {
  return inject(arrayFormContentKey)
}

export function useArrayForm(
  props: Pick<IArrayFormContentProps, 'modelValue' | 'columns' | 'max'>,
  emit: IArrayFormEmits
): {
  showAdd: ComputedRef<boolean>
  add: (indexes: number[]) => void
  remove: (index: number, indexes: number[]) => void
  update: (value: UnknownObject, index: number) => void
} {
  const arrayForm = useArrayFormInject()

  const showAdd = computed<boolean>(() => {
    return props.max ? props.max > props.modelValue.length : true
  })

  function add(indexes: number[]) {
    let _model = [...props.modelValue]

    if (props.modelValue) {
      _model.push({})
    } else {
      _model = [{}]
    }
    emit('update:modelValue', _model)
    arrayForm?.add(indexes)
  }

  function remove(index: number, indexes: number[]) {
    const _model = [...props.modelValue]

    _model.splice(index, 1)
    emit('update:modelValue', _model)
    arrayForm?.remove(indexes)
  }

  function update(value: UnknownObject, index: number) {
    const _model = [...props.modelValue]

    _model[index] = value
    emit('update:modelValue', _model)
  }

  return {
    showAdd,
    add,
    remove,
    update,
  }
}
