import { computed, shallowRef, provide, inject, reactive, onMounted } from 'vue'
import { useShow, useLocale } from '../composables/index'
import { isBoolean } from '../utils/index'
import type { ComputedRef, Ref, InjectionKey, Slot } from 'vue'
import type { CollapseModelValue, TabPaneName } from 'element-plus'
import type { UnknownObject } from '../types/index'
import type {
  IFormEmits,
  IFormExpose,
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
  submitProps: { type: 'primary' },
  reset: true,
}

export function useFormMenu(
  props: Pick<IFormProps, 'menu'>,
): ComputedRef<IFormMenuColumns> {
  const { t } = useLocale()

  return computed(() => {
    const menu = {
      ...formMenu,
      submitText: t('pro.form.submit'),
      resetText: t('pro.form.reset'),
      prevText: t('pro.form.prev'),
      nextText: t('pro.form.next'),
    }

    return props.menu ? Object.assign({}, menu, props.menu) : menu
  })
}

export function useFormMethods(emit: IFormEmits): {
  formRef: Ref<IFormExpose>
  formExpose: IFormExpose
  loading: Ref<boolean>
  update: (value: UnknownObject) => void
  submitForm: () => void
  resetForm: (reset?: boolean) => void
} {
  const formRef = shallowRef<IFormExpose>({} as IFormExpose)
  const formExpose = reactive<IFormExpose>({} as IFormExpose)
  const { show, toggleShow } = useShow()

  onMounted(() => {
    Object.assign(formExpose, formRef.value)
  })

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
    formRef.value?.resetFields()
    emit('reset')
  }

  return {
    formRef,
    formExpose,
    loading: show,
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
