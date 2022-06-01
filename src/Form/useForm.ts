import { ComputedRef, computed, Ref, unref, shallowRef } from 'vue'
import { useLocale, useSize } from 'element-plus'
import { useShow } from '../composables/index'
import { isObject, objectOmit, isBoolean } from '../utils/index'
import type { UnknownObject, MaybeArray, MaybeRef } from '../types/index'
import type {
  IFormEmits,
  FormColumn,
  IFormExpose,
  IFormValidateCallback,
  IFormValidateFieldCallback,
  IFormMenuColumns,
  InvalidFields,
} from './index'

type FormItemBind = Omit<
  FormColumn,
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
  currentBind: MaybeRef<FormColumn>
): ComputedRef<FormItemBind> {
  return computed(() => {
    const omitKeys: Array<keyof FormColumn> = [
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
    const size = useSize()
    const _currentBind = unref(currentBind)
    const _option = isObject(_currentBind)
      ? objectOmit<FormColumn>(_currentBind, omitKeys)
      : ({} as FormColumn)

    _option.size = _option.size || size.value
    return _option
  })
}

export const formMenu: IFormMenuColumns = {
  submit: true,
  submitText: 'Submit',
  submitProps: { type: 'primary' },
  reset: true,
  resetText: 'Reset',
}

export function useFormMenu(
  props: Readonly<{ menu?: IFormMenuColumns }>
): ComputedRef<IFormMenuColumns> {
  return computed(() => {
    const { t } = useLocale()
    const submitText = t('pro.form.submit')
    const resetText = t('pro.form.reset')

    if (submitText && submitText !== 'pro.form.submit') {
      formMenu.submitText = submitText
    }
    if (resetText && resetText !== 'pro.form.reset') {
      formMenu.resetText = resetText
    }

    return props.menu ? Object.assign({}, formMenu, props.menu) : formMenu
  })
}

export function useFormMethods(emit: IFormEmits): {
  form: Ref<IFormExpose>
  loading: Ref<boolean>
  upFormData: (value: unknown) => void
  submitForm: () => void
  resetForm: (reset?: boolean) => void
} & IFormExpose {
  const form = shallowRef<IFormExpose>({} as IFormExpose)
  const { show, toggleShow } = useShow()

  function validate(callback?: IFormValidateCallback) {
    return form.value.validate(callback)
  }

  function resetFields() {
    form.value.resetFields()
  }

  function scrollToField(prop: string) {
    form.value.scrollToField(prop)
  }

  function clearValidate(props?: MaybeArray<string>) {
    form.value.clearValidate(props)
  }

  function validateField(
    props: MaybeArray<string>,
    cb: IFormValidateFieldCallback
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
      .catch((invalidFields: InvalidFields) => {
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
    scrollToField,
    clearValidate,
    validateField,
    upFormData,
    submitForm,
    resetForm,
  }
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
