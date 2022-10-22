import { computed, Ref, unref, shallowRef, provide, inject } from 'vue'
import { useLocale, useSize } from 'element-plus'
import { useShow } from '../composables/index'
import { isObject, objectOmit, isBoolean } from '../utils/index'
import type { ComputedRef, InjectionKey } from 'vue'
import type { UnknownObject, MaybeArray, MaybeRef } from '../types/index'
import type {
  IFormEmits,
  FormColumn,
  IFormExpose,
  IFormValidateCallback,
  IFormValidateFieldCallback,
  IFormMenuColumns,
  InvalidFields,
  IFormContext,
  IArrayFormEmits,
  IArrayFormProps,
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
    const menu = { ...formMenu }
    const { t } = useLocale()
    const submitText = t('pro.form.submit')
    const resetText = t('pro.form.reset')

    if (submitText && submitText !== 'pro.form.submit') {
      menu.submitText = submitText
    }
    if (resetText && resetText !== 'pro.form.reset') {
      menu.resetText = resetText
    }

    return props.menu ? Object.assign({}, menu, props.menu) : menu
  })
}

export function useFormMethods(emit: IFormEmits): {
  form: Ref<IFormExpose>
  loading: Ref<boolean>
  upFormData: (value: UnknownObject) => void
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

  function upFormData(value: UnknownObject) {
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

export const formContentKey: InjectionKey<IFormContext> = Symbol('arrayFormKey')

export function useFormProvide(emit: IArrayFormEmits) {
  provide(formContentKey, { add, remove })

  function add(indexes: number[]) {
    emit('add', indexes)
  }

  function remove(indexes: number[]) {
    emit('remove', indexes)
  }
}

export function useFormInject() {
  return inject(formContentKey)
}

export function useArrayForm(
  props: Pick<IArrayFormProps, 'modelValue' | 'columns' | 'max'>,
  emit: IArrayFormEmits
): {
  showAdd: ComputedRef<boolean>
  add: (indexes: number[]) => void
  remove: (index: number, indexes: number[]) => void
  update: (value: UnknownObject, index: number) => void
} {
  const arrayForm = useFormInject()

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
