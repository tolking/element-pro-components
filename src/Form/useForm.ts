import { computed, shallowRef, provide, inject } from 'vue'
import { useLocale } from 'element-plus'
import { useShow } from '../composables/index'
import { isBoolean } from '../utils/index'
import type { ComputedRef, Ref, InjectionKey, Slot } from 'vue'
import type { CollapseModelValue, TabPaneName } from 'element-plus'
import type { UnknownObject, MaybeArray } from '../types/index'
import type {
  IFormEmits,
  IFormExpose,
  IFormValidateCallback,
  IFormValidateFieldCallback,
  IFormMenuColumns,
  InvalidFields,
  IFormContext,
  IArrayFormEmits,
  IArrayFormProps,
  IFormProps,
  GroupFormColumn,
  IFormItemProps,
  UseFormProvideConfig,
  UseFormInjectEmitsCallback,
  FormColumn,
} from './index'

export const formMenu: IFormMenuColumns = {
  submit: true,
  submitText: 'Submit',
  submitProps: { type: 'primary' },
  reset: true,
  resetText: 'Reset',
  prevText: 'Prev',
  nextText: 'Next',
}

export function useFormMenu(
  props: Pick<IFormProps, 'menu'>,
): ComputedRef<IFormMenuColumns> {
  return computed(() => {
    const menu = { ...formMenu }
    const { t } = useLocale()
    const submitText = t('pro.form.submit')
    const resetText = t('pro.form.reset')
    const prevText = t('pro.form.prev')
    const nextText = t('pro.form.next')

    if (submitText && submitText !== 'pro.form.submit') {
      menu.submitText = submitText
    }
    if (resetText && resetText !== 'pro.form.reset') {
      menu.resetText = resetText
    }
    if (prevText && prevText !== 'pro.form.prev') {
      menu.prevText = prevText
    }
    if (nextText && nextText !== 'pro.form.next') {
      menu.nextText = nextText
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
    cb: IFormValidateFieldCallback,
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

export function useFormProvide(content: UseFormProvideConfig) {
  provide(formContentKey, {
    ...content,
    ...useFormInjectEmits(content.emit),
  })
}

export function useFormInjectEmits(
  emit: IFormEmits,
): UseFormInjectEmitsCallback {
  function addItem(indexes: number[]) {
    emit('add-item', indexes)
  }

  function removeItem(indexes: number[]) {
    emit('remove-item', indexes)
  }

  function tabsChange(name: TabPaneName) {
    emit('tab-change', name)
  }

  function collapseChange(active: CollapseModelValue) {
    emit('collapse-change', active)
  }

  function stepChange(active: TabPaneName) {
    emit('step-change', active)
  }

  return {
    addItem,
    removeItem,
    tabsChange,
    collapseChange,
    stepChange,
  }
}

export function useFormInject() {
  return inject(formContentKey)
}

export function useArrayForm(
  props: Pick<IArrayFormProps, 'modelValue' | 'columns' | 'max'>,
  emit: IArrayFormEmits,
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
    form?.addItem(indexes)
  }

  function remove(index: number, indexes: number[]) {
    const _model = [...props.modelValue]

    _model.splice(index, 1)
    emit('update:modelValue', _model)
    form?.removeItem(indexes)
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

export function useCreateLabel(props: Pick<IFormItemProps, 'indexes'>) {
  const form = useFormInject()

  function createLabel(item: GroupFormColumn | FormColumn) {
    if (form?.slots[`form-${item.prop}-label`]) {
      return (form?.slots[`form-${item.prop}-label`] as Slot)({
        item: item,
        indexes: props.indexes,
      })
    } else {
      return item.label
    }
  }

  return createLabel
}
