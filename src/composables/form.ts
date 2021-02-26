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
import { useProOptions } from './index'
import {
  filterSlotDeep,
  isObject,
  objectDeepMerge,
  objectPick,
} from '../utils/index'
import type {
  FormColumn,
  IFormColumns,
  IComponentSize,
  IFormExpose,
  IFormValidateCallback,
  IFormValidateFieldCallback,
  UnknownObject,
  IFormMenuColumns,
  MenuOptions,
} from '../types/index'

export function useFormSlotList(
  columns: IFormColumns | Ref<IFormColumns>
): ComputedRef<IFormColumns> {
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
  FormColumn,
  'slot' | 'component' | 'max' | 'props' | 'prop' | 'children'
>

export function useFormItemBind(
  currentBind: FormColumn | Ref<FormColumn>
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

export function useFormMenu(
  props: Readonly<{ menu?: IFormMenuColumns }>
): ComputedRef<IFormMenuColumns> {
  return computed(() => {
    const options = useProOptions('ProFormOptions')
    const pickKeys = [
      'submit',
      'submitText',
      'submitProps',
      'reset',
      'resetText',
      'resetProps',
    ]
    const formMenu = objectPick<MenuOptions, IFormMenuColumns>(
      options.menu,
      pickKeys
    )
    return props.menu
      ? objectDeepMerge<IFormMenuColumns>(formMenu, props.menu)
      : formMenu
  })
}

export function useFormMethods(
  emit: (event: 'submit' | 'reset', ...args: unknown[]) => void,
  upData: (value: unknown) => void
): {
  form: Ref<IFormExpose>
  submitForm: () => void
  resetForm: () => void
} & IFormExpose {
  const form = ref<IFormExpose>({} as IFormExpose)

  function validate(callback?: IFormValidateCallback) {
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
    cb: IFormValidateFieldCallback
  ) {
    form.value.validateField(props, cb)
  }

  function submitForm() {
    form.value
      .validate()
      .then((state) => {
        emit('submit', state)
      })
      .catch((err) => {
        emit('submit', false, err)
      })
  }

  function resetForm() {
    upData({})
    nextTick(() => {
      form.value.resetFields()
      emit('reset')
    })
  }

  return {
    form,
    validate,
    resetFields,
    clearValidate,
    validateField,
    submitForm,
    resetForm,
  }
}

interface ElInstallOptions {
  size: IComponentSize
  zIndex: number
  locale?: unknown
}

function useGlobalConfig(): ElInstallOptions {
  const vm = getCurrentInstance()
  const proxy = (vm?.proxy || {}) as { $ELEMENT: ElInstallOptions }
  return ('$ELEMENT' in proxy ? proxy.$ELEMENT : {}) as ElInstallOptions
}

export function useFormSize(
  props?: Readonly<{ size?: IComponentSize }>
): ComputedRef<IComponentSize> {
  const elForm = inject<{ size?: IComponentSize }>('elForm', {})
  const elFormItem = inject<{ size?: IComponentSize }>('elFormItem', {})
  const elConfig = useGlobalConfig()

  return computed(() => {
    return props?.size || elFormItem.size || elForm.size || elConfig.size
  })
}

type ModelChildValue = Record<string, UnknownObject[]>

export function useFormChild(
  props: Readonly<{
    item: FormColumn
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
