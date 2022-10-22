import { computed, defineComponent, h, mergeProps, VNode } from 'vue'
import { reactivePick } from '@vueuse/core'
import { ElForm, ElFormItem, ElButton } from 'element-plus'
import { useCurrentBreakpoint, useRow } from '../composables/index'
import { useFormProvide, useFormMethods, useFormMenu } from './useForm'
import { formProps, formEmits, formKeys } from './props'
import ProFormList from './FormList'

export default defineComponent({
  name: 'ProForm',
  props: formProps,
  emits: formEmits,
  setup(props, { slots, emit, expose }) {
    const config = reactivePick(props, ...formKeys)
    const {
      form,
      loading,
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
      upFormData,
      submitForm,
      resetForm,
    } = useFormMethods(emit)
    const menu = useFormMenu(props)
    const { rowStyle, rowClass } = useRow(props)
    const breakpoint = useCurrentBreakpoint()
    const labelPosition = computed(() => {
      const xs = breakpoint.value === 'xs' && !props.inline
      return props.labelPosition || (xs ? 'top' : undefined)
    })
    const menuStyle = computed(() => {
      if (props.gutter) {
        return {
          paddingLeft: `${props.gutter / 2}px`,
          paddingRight: `${props.gutter / 2}px`,
        }
      }
      return {}
    })

    useFormProvide(emit)

    expose({
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
    })

    function createColumns() {
      return h(
        ProFormList,
        mergeProps(props, { 'onUpdate:modelValue': upFormData }),
        slots
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
            mergeProps(menu.value.submitProps || {}, {
              loading: loading.value,
              onClick: submitForm,
            }),
            () => menu.value.submitText
          )
        )
      }
      if (menu.value.reset) {
        list.push(
          h(
            ElButton,
            mergeProps(menu.value.resetProps || {}, {
              loading: loading.value,
              onClick: () => resetForm(),
            }),
            () => menu.value.resetText
          )
        )
      }
      if (slots['menu-right']) {
        list = list.concat(slots['menu-right']({ loading: loading.value }))
      }

      return h(
        ElFormItem,
        { class: 'pro-form-menu', style: menuStyle.value },
        () => list
      )
    }

    return () =>
      h(
        ElForm,
        mergeProps(config, {
          ref: form,
          model: props.modelValue,
          inline: props.inline,
          labelPosition: labelPosition.value,
          style: !props.inline ? rowStyle.value : null,
          class: [
            'pro-form',
            !props.inline && rowClass.value,
            props.type === 'array' && 'is-array',
          ],
          onSubmit: (e: Event) => {
            e.preventDefault()
          },
        }),
        () => [createColumns(), slots.default && slots.default(), createMenu()]
      )
  },
})
