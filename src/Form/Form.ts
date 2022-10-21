import { computed, defineComponent, h, mergeProps } from 'vue'
import { reactivePick } from '@vueuse/core'
import { ElForm } from 'element-plus'
import { useCurrentBreakpoint, useRow } from '../composables/index'
import { useArrayFormProvide } from '../ArrayForm/index'
import { useFormMethods } from './useForm'
import { formProps, formEmits, formKeys } from './props'
import ProFormMenu from './FormMenu'
import ProFormItem from './FormItem'

export default defineComponent({
  name: 'ProForm',
  props: formProps,
  emits: formEmits,
  setup(props, { slots, emit, expose }) {
    const config = reactivePick(props, ...formKeys)
    const {
      formRef,
      loading,
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
      update,
      submitForm,
      resetForm,
    } = useFormMethods(emit)
    const { rowStyle, rowClass } = useRow(props)
    const breakpoint = useCurrentBreakpoint()
    const labelPosition = computed(() => {
      const xs = breakpoint.value === 'xs' && !props.inline
      return props.labelPosition || (xs ? 'top' : undefined)
    })

    useArrayFormProvide(emit)

    expose({
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
    })

    function createColumn() {
      return (
        props.columns?.map((item) => {
          return h(
            ProFormItem,
            {
              modelValue: props.modelValue,
              item,
              prop: item.prop,
              inline: props.inline,
              'onUpdate:modelValue': update,
            },
            slots
          )
        }) || null
      )
    }

    return () =>
      h(
        ElForm,
        mergeProps(config, {
          ref: formRef,
          model: props.modelValue,
          inline: props.inline,
          labelPosition: labelPosition.value,
          style: !props.inline ? rowStyle.value : undefined,
          class: ['pro-form', !props.inline ? rowClass.value : ''],
          onSubmit: (e: Event) => {
            e.preventDefault()
          },
        }),
        () => [
          createColumn(),
          slots.default && slots.default(),
          h(
            ProFormMenu,
            {
              menu: props.menu,
              gutter: props.gutter,
              loading: loading.value,
              submitForm,
              resetForm,
            },
            slots
          ),
        ]
      )
  },
})
