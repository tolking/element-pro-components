import {
  ComputedRef,
  computed,
  Ref,
  unref,
  inject,
  getCurrentInstance,
  ref,
  nextTick,
} from 'vue'
import { isObject } from '@vue/shared'
import { filterSlotDeep } from '../utils/index'
import type {
  ProColumns,
  ComponentSize,
  ProFormExpose,
  ProFormValidateCallback,
  ProFormValidateFieldCallback,
  UnknownObject,
} from '../types/index'

export function useFormSlotList(
  columns: ProColumns | Ref<ProColumns>
): ComputedRef<ProColumns> {
  const _columns = unref(columns)

  return computed(() => {
    return filterSlotDeep(_columns).map((item) => {
      item.labelSlot = item.prop + '-label'
      item.errorSlot = item.prop + '-error'
      return item
    })
  })
}

export function useFormItemBind(
  currentBind: UnknownObject | Ref<UnknownObject>
): ComputedRef<UnknownObject> {
  const _currentBind = unref(currentBind)
  const _option = isObject(_currentBind) ? { ..._currentBind } : {}

  if (_option) {
    _option.slot = undefined
    _option.component = undefined
    _option.max = undefined
    _option.props = undefined
    _option.prop = undefined
    delete _option.children
  }

  _option.size = _option.size || useFormSize().value

  return computed(() => _option)
}

export function useFormMethods(
  upData: (value: unknown) => void
): { form: Ref<ProFormExpose> } & ProFormExpose {
  const form = ref<ProFormExpose>({} as ProFormExpose)

  function validate(callback?: ProFormValidateCallback) {
    return form.value.validate(callback)
  }

  function resetFields() {
    upData({})
    nextTick(() => {
      form.value.resetFields()
    })
  }

  function clearValidate(props?: string | string[]) {
    form.value.clearValidate(props)
  }

  function validateField(
    props: string | string[],
    cb: ProFormValidateFieldCallback
  ) {
    form.value.validateField(props, cb)
  }

  return {
    form,
    validate,
    resetFields,
    clearValidate,
    validateField,
  }
}

interface ElInstallOptions {
  size: ComponentSize
  zIndex: number
  locale?: unknown
}

function useGlobalConfig(): ElInstallOptions {
  const vm = getCurrentInstance()
  const proxy = (vm?.proxy || {}) as { $ELEMENT: ElInstallOptions }
  return (proxy?.$ELEMENT || {}) as ElInstallOptions
}

export function useFormSize(
  props?: Readonly<{ size?: ComponentSize }>
): ComputedRef<ComponentSize> {
  const elForm = inject<{ size?: ComponentSize }>('elForm', {})
  const elFormItem = inject<{ size?: ComponentSize }>('elFormItem', {})
  const $ElEMENT = useGlobalConfig()

  return computed(() => {
    return props?.size || elFormItem.size || elForm.size || $ElEMENT.size
  })
}

type ModelChildValue = Record<string, UnknownObject[]>

export function useFormChild(
  props: Readonly<{
    item: UnknownObject & { prop: string }
    modelValue: UnknownObject
  }>,
  emit: (event: 'update:modelValue', ...args: unknown[]) => void
): {
  add: () => void
  del: (index: number) => void
  upChildData: (value: UnknownObject, index: number) => void
} {
  function add() {
    const _model = { ...props.modelValue } as ModelChildValue
    if (props.modelValue[props.item.prop]) {
      _model[props.item.prop].push({})
    } else {
      _model[props.item.prop] = [{}]
    }
    emit('update:modelValue', _model)
  }

  function del(index: number) {
    const _model = { ...props.modelValue } as ModelChildValue
    _model[props.item.prop].splice(index, 1)
    emit('update:modelValue', _model)
  }

  function upChildData(value: UnknownObject, index: number) {
    const _model = { ...props.modelValue } as ModelChildValue
    _model[props.item.prop][index] = value
    emit('update:modelValue', _model)
  }

  return {
    add,
    del,
    upChildData,
  }
}
