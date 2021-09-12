import { computed, defineComponent, h, toRefs, VNode } from 'vue'
import { ElForm, ElFormItem, ElButton } from 'element-plus'
import {
  useFormMethods,
  useScreenSize,
  useFormMenu,
  useRow,
} from '../composables/index'
import props from './props'
import ProFormItem from './FormItem'

export default defineComponent({
  name: 'ProForm',
  props,
  emits: ['update:modelValue', 'submit', 'reset'],
  setup(props, { slots, emit, expose }) {
    const { columns, modelValue, labelPosition, inline } = toRefs(props)
    const {
      form,
      loading,
      validate,
      resetFields,
      clearValidate,
      validateField,
      upFormData,
      submitForm,
      resetForm,
    } = useFormMethods(emit)
    const menu = useFormMenu(props)
    const { rowStyle, rowClass } = useRow(props)
    const size = useScreenSize()
    const position = computed(() => {
      return size.value === 'xs' && !inline?.value
        ? 'top'
        : labelPosition?.value
    })

    expose({
      validate,
      resetFields,
      clearValidate,
      validateField,
    })

    function createColumn() {
      return (
        columns.value?.map((item) => {
          return h(
            ProFormItem,
            {
              modelValue: modelValue.value,
              item,
              prop: item.prop,
              inline: inline.value,
              'onUpdate:modelValue': upFormData,
            },
            slots
          )
        }) || null
      )
    }

    function createMenu() {
      let list: VNode[] = []

      if (slots['menu-left']) {
        list = list.concat(slots['menu-left']())
      }
      if (menu.value.submit) {
        list.push(
          h(
            ElButton,
            {
              ...menu.value.submitProps,
              loading: loading.value,
              onClick: submitForm,
            },
            () => menu.value.submitText
          )
        )
      }
      if (menu.value.reset) {
        list.push(
          h(
            ElButton,
            {
              ...menu.value.resetProps,
              loading: loading.value,
              onClick: resetForm,
            },
            () => menu.value.resetText
          )
        )
      }
      if (slots['menu-right']) {
        list = list.concat(slots['menu-right']())
      }

      return h(ElFormItem, { class: 'pro-form-menu' }, () => list)
    }

    return () =>
      h(
        ElForm,
        {
          ref: form,
          model: modelValue.value,
          labelPosition: position.value,
          inline: inline.value,
          style: !inline.value ? rowStyle.value : undefined,
          class: ['pro-form', !inline.value ? rowClass.value : ''],
        },
        () => [createColumn(), slots.default, createMenu()]
      )
  },
})
