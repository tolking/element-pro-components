import {
  ComputedRef,
  computed,
  Ref,
  unref,
  inject,
  ref,
  getCurrentInstance,
} from 'vue'
import { useProOptions, useShow } from './index'
import {
  filterFlat,
  isObject,
  objectDeepMerge,
  objectPick,
  objectOmit,
  isBoolean,
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
  DeepKeyof,
  MaybeArray,
} from '../types/index'

interface FormSlot extends FormColumn {
  labelSlot: string
  errorSlot: string
}

export function useFormSlotList(
  columns: IFormColumns | Ref<IFormColumns>
): ComputedRef<FormSlot[]> {
  return computed(() => {
    const _columns = unref(columns)

    return filterFlat<IFormColumns, FormSlot[]>(
      _columns,
      'slot',
      true,
      (item) => {
        item.labelSlot = item.prop + '-label'
        item.errorSlot = item.prop + '-error'
        return item as FormSlot
      }
    )
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
  resetForm: (reset?: boolean) => void
} & IFormExpose<T> {
  const form = ref<IFormExpose<T>>({} as IFormExpose<T>)
  const { show, toggleShow } = useShow()

  function validate(callback?: IFormValidateCallback<T>) {
    return form.value.validate(callback)
  }

  function resetFields() {
    form.value.resetFields()
  }

  function clearValidate(props?: MaybeArray<DeepKeyof<T>>) {
    form.value.clearValidate(props)
  }

  function validateField(
    props: MaybeArray<DeepKeyof<T>>,
    cb: IFormValidateFieldCallback<T>
  ) {
    form.value.validateField(props, cb)
  }

  function upFormData(value: unknown) {
    emit('update:modelValue', value)
  }

  function submitForm() {
    show.value = true
    form.value
      .validate()
      .then((isValid) => {
        emit('submit', toggleShow, isValid)
      })
      .catch((invalidFields: UnknownObject) => {
        emit('submit', toggleShow, false, invalidFields)
      })
  }

  /**
   * reset Form Fields and reset Form data
   * @param reset Whether to clear the form data
   */
  function resetForm(reset = false) {
    if (isBoolean(reset) && reset) {
      upFormData({})
    }
    resetFields()
    emit('reset')
  }

  return {
    form,
    loading: show,
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
  hasChild: ComputedRef<boolean>
  showAddBtn: ComputedRef<boolean>
  add: () => void
  del: (index: number) => void
  upChildData: (value: UnknownObject, index: number) => void
} {
  const hasChild = computed<boolean>(() => {
    return props.item.children ? !!props.item.children.length : false
  })

  const showAddBtn = computed<boolean>(() => {
    return props.item.max
      ? props.item.max >
          ((props.modelValue[props.item.prop] as unknown[])?.length || 0)
      : true
  })

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
    hasChild,
    showAddBtn,
    add,
    del,
    upChildData,
  }
}
