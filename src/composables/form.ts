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
  filterFlat,
  isObject,
  objectDeepMerge,
  objectPick,
  objectOmit,
} from '../utils/index'
import type {
  FormColumn,
  FormMenu,
  IFormColumns,
  IComponentSize,
  IFormExpose,
  IFormValidateCallback,
  IFormValidateFieldCallback,
  UnknownObject,
  IFormMenuColumns,
  MenuOptions,
  DeepTypeof,
} from '../types/index'

export function useFormSlotList(
  columns: IFormColumns | Ref<IFormColumns>
): ComputedRef<IFormColumns> {
  return computed(() => {
    const _columns = unref(columns)

    return filterFlat<IFormColumns>(_columns, 'slot', true, (item) => {
      item.labelSlot = item.prop + '-label'
      item.errorSlot = item.prop + '-error'
      return item
    })
  })
}

type FormItemBind = Omit<
  FormColumn,
  | 'slot'
  | 'component'
  | 'max'
  | 'props'
  | 'prop'
  | 'span'
  | 'offset'
  | 'pull'
  | 'push'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'children'
>

export function useFormItemBind(
  currentBind: FormColumn | Ref<FormColumn>
): ComputedRef<FormItemBind> {
  return computed(() => {
    const omitKeys: Array<keyof FormColumn> = [
      'slot',
      'component',
      'max',
      'props',
      'prop',
      'children',
      'span',
      'offset',
      'pull',
      'push',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]
    const _currentBind = unref(currentBind)
    const _option = isObject(_currentBind)
      ? objectOmit<FormColumn, FormItemBind>(_currentBind, omitKeys)
      : ({} as FormColumn)

    _option.size = _option.size || useFormSize().value
    return _option
  })
}

export function useFormMenu(
  props: Readonly<{ menu?: IFormMenuColumns }>
): ComputedRef<IFormMenuColumns> {
  return computed(() => {
    const options = useProOptions()
    const pickKeys: Array<keyof FormMenu> = [
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

export function useFormMethods<T = UnknownObject>(
  emit: (
    event: 'update:modelValue' | 'submit' | 'reset',
    ...args: unknown[]
  ) => void
): {
  form: Ref<IFormExpose<T>>
  loading: Ref<boolean>
  upFormData: (value: unknown) => void
  submitForm: () => void
  resetForm: () => void
} & IFormExpose<T> {
  const form = ref<IFormExpose<T>>({} as IFormExpose<T>)
  const loading = ref(false)

  function done() {
    loading.value = false
  }

  function validate(callback?: IFormValidateCallback<T>) {
    return form.value.validate(callback)
  }

  function resetFields() {
    upFormData({})
    nextTick(() => {
      form.value.resetFields()
    })
  }

  function clearValidate(props?: DeepTypeof<T> | DeepTypeof<T>[]) {
    form.value.clearValidate(props)
  }

  function validateField(
    props: DeepTypeof<T> | DeepTypeof<T>[],
    cb: IFormValidateFieldCallback<T>
  ) {
    form.value.validateField(props, cb)
  }

  function upFormData(value: unknown) {
    emit('update:modelValue', value)
  }

  function submitForm() {
    loading.value = true
    form.value
      .validate()
      .then((isValid) => {
        emit('submit', done, isValid)
      })
      .catch((invalidFields: UnknownObject) => {
        emit('submit', done, false, invalidFields)
      })
  }

  function resetForm() {
    upFormData({})
    nextTick(() => {
      form.value.resetFields()
      emit('reset')
    })
  }

  return {
    form,
    loading,
    validate,
    resetFields,
    clearValidate,
    validateField,
    upFormData,
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
