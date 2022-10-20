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
  formRef: Ref<IFormExpose>
  loading: Ref<boolean>
  update: (value: UnknownObject | UnknownObject[]) => void
  submitForm: () => void
  resetForm: (reset?: boolean) => void
} & IFormExpose {
  const formRef = shallowRef<IFormExpose>({} as IFormExpose)
  const { show, toggleShow } = useShow()

  function validate(callback?: IFormValidateCallback) {
    return formRef.value.validate(callback)
  }

  function resetFields() {
    formRef.value.resetFields()
  }

  function scrollToField(prop: string) {
    formRef.value.scrollToField(prop)
  }

  function clearValidate(props?: MaybeArray<string>) {
    formRef.value.clearValidate(props)
  }

  function validateField(
    props: MaybeArray<string>,
    cb: IFormValidateFieldCallback
  ) {
    formRef.value.validateField(props, cb)
  }

  function update(value: UnknownObject | UnknownObject[]) {
    emit('update:modelValue', value)
  }

  function submitForm() {
    show.value = true
    formRef.value
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
   * @param reset Whether to clear the formRef data
   */
  function resetForm(reset = false) {
    if (isBoolean(reset) && reset) {
      update({})
    }
    resetFields()
    emit('reset')
  }

  return {
    formRef,
    loading: show,
    validate,
    resetFields,
    scrollToField,
    clearValidate,
    validateField,
    update,
    submitForm,
    resetForm,
  }
}
