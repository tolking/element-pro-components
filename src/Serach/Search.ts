import { defineComponent, h } from 'vue'
import { ProForm, useFormMethods } from '../Form/index'
import { searchProps, searchEmits } from './props'
import { useSearch, useSearchMenu, useSearchSlots } from './useSearch'

export default defineComponent({
  name: 'ProSearch',
  props: searchProps,
  emits: searchEmits,
  setup(props, { emit, expose }) {
    const menuColumns = useSearchMenu(props)
    const slots = useSearchSlots()
    const {
      columns,
      addItem,
      removeItem,
      tabsChange,
      collapseChange,
      stepChange,
      submitForm,
    } = useSearch(props, emit)
    const {
      formRef,
      validate,
      resetFields,
      clearValidate,
      scrollToField,
      validateField,
      update,
      resetForm,
    } = useFormMethods(emit)

    expose({
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
    })

    return () =>
      h(
        ProForm,
        {
          ...props,
          ref: formRef,
          columns: columns.value,
          menu: menuColumns.value,
          inline: false,
          class: 'pro-search',
          'onUpdate:modelValue': update,
          'onAdd-item': addItem,
          'onRemove-item': removeItem,
          'onTab-change': tabsChange,
          'onCollapse-change': collapseChange,
          'onStep-change': stepChange,
          onSubmit: submitForm,
          onReset: resetForm,
        },
        slots,
      )
  },
})
