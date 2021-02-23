import {
  ComputedRef,
  computed,
  Ref,
  unref,
  inject,
  ref,
  nextTick,
  getCurrentInstance,
} from 'vue'
import { filterSlotDeep, isObject } from '../utils/index'
import type {
  ProFormColumn,
  ProFormColumns,
  ComponentSize,
  ProFormExpose,
  ProFormValidateCallback,
  ProFormValidateFieldCallback,
  UnknownObject,
} from '../types/index'

export function useFormSlotList(
  columns: ProFormColumns | Ref<ProFormColumns>
): ComputedRef<ProFormColumns> {
  return computed(() => {
    const _columns = unref(columns)

    return filterSlotDeep(_columns).map((item) => {
      item.labelSlot = item.prop + '-label'
      item.errorSlot = item.prop + '-error'
      return item
    })
  })
}

type FormItemBind = Omit<
  ProFormColumn,
  'slot' | 'component' | 'max' | 'props' | 'prop' | 'children'
>

export function useFormItemBind(
  currentBind: ProFormColumn | Ref<ProFormColumn>
): ComputedRef<FormItemBind> {
  return computed(() => {
    const _currentBind = unref(currentBind)
    const _option = isObject(_currentBind)
      ? { ..._currentBind }
      : ({} as FormItemBind)

    if (_option) {
      _option.slot = undefined
      _option.component = undefined
      _option.max = undefined
      _option.props = undefined
      _option.prop = undefined
      delete _option.children
    }

    _option.size = _option.size || useFormSize().value
    return _option
  })
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
  return ('$ELEMENT' in proxy ? proxy.$ELEMENT : {}) as ElInstallOptions
}

export function useFormSize(
  props?: Readonly<{ size?: ComponentSize }>
): ComputedRef<ComponentSize> {
  const elForm = inject<{ size?: ComponentSize }>('elForm', {})
  const elFormItem = inject<{ size?: ComponentSize }>('elFormItem', {})
  const elConfig = useGlobalConfig()

  return computed(() => {
    return props?.size || elFormItem.size || elForm.size || elConfig.size
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
