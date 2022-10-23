import { computed, Ref, unref, shallowRef, provide, inject, toRef } from 'vue'
import { useLocale, useSize } from 'element-plus'
import { useShow } from '../composables/index'
import { isObject, objectOmit, isBoolean } from '../utils/index'
import type { ComputedRef, InjectionKey, Slots } from 'vue'
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
  IFormProps,
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
  props: Pick<IFormProps, 'menu'>
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
  update: (value: UnknownObject) => void
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

  function update(value?: UnknownObject | UnknownObject[]) {
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
   * @param reset Whether to clear the form data
   */
  function resetForm(reset = false) {
    if (isBoolean(reset) && reset) {
      update(undefined)
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

export const formContentKey: InjectionKey<IFormContext> = Symbol('formKey')

export function useFormProvide(
  props: Pick<IFormProps, 'inline'>,
  emit: IArrayFormEmits,
  slots: Readonly<Slots>
) {
  provide(formContentKey, {
    inline: toRef(props, 'inline'),
    slots,
    add,
    remove,
  })

  function add(indexes: number[]) {
    emit('add-item', indexes)
  }

  function remove(indexes: number[]) {
    emit('remove-item', indexes)
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
  const form = useFormInject()

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
    form?.add(indexes)
  }

  function remove(index: number, indexes: number[]) {
    const _model = [...props.modelValue]

    _model.splice(index, 1)
    emit('update:modelValue', _model)
    form?.remove(indexes)
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
