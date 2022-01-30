import { computed, defineComponent, h, toRefs, VNode } from 'vue'
import { ElForm, ElFormItem, ElButton } from 'element-plus'
import {
  useFormMethods,
  useScreenSize,
  useFormMenu,
  useRow,
} from '../composables/index'
import props from './props'
import emits from './emits'
import ProFormItem from './FormItem'
import type { IFormProps } from './index'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createFormProps(props: Omit<IFormProps, 'menu' | 'align'>) {
  return {
    rules: props.rules,
    labelWidth: props.labelWidth,
    labelSuffix: props.labelSuffix,
    hideRequiredAsterisk: props.hideRequiredAsterisk,
    showMessage: props.showMessage,
    inlineMessage: props.inlineMessage,
    statusIcon: props.statusIcon,
    validateOnRuleChange: props.validateOnRuleChange,
    size: props.size,
    disabled: props.disabled,
    scrollToError: props.scrollToError,
  }
}

export default defineComponent({
  name: 'ProForm',
  props,
  emits,
  setup(props, { slots, emit, expose }) {
    const { columns, modelValue, inline } = toRefs(props)
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
    const screenSize = useScreenSize()
    const labelPosition = computed(() => {
      return screenSize.value === 'xs' && !inline?.value
        ? 'top'
        : props.labelPosition
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
        list = list.concat(slots['menu-left']({ loading: loading.value }))
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
              onClick: () => resetForm(),
            },
            () => menu.value.resetText
          )
        )
      }
      if (slots['menu-right']) {
        list = list.concat(slots['menu-right']({ loading: loading.value }))
      }

      return h(ElFormItem, { class: 'pro-form-menu' }, () => list)
    }

    return () => {
      const config = createFormProps(props)
      return h(
        ElForm,
        Object.assign(
          {
            ref: form,
            model: modelValue.value,
            inline: inline.value,
            labelPosition: labelPosition.value,
            style: !inline.value ? rowStyle.value : undefined,
            class: ['pro-form', !inline.value ? rowClass.value : ''],
          },
          config
        ),
        () => [createColumn(), slots.default && slots.default(), createMenu()]
      )
    }
  },
})
