import { computed, defineComponent, h, mergeProps } from 'vue'
import { reactivePick } from '@vueuse/core'
import { ElForm } from 'element-plus'
import { useCurrentBreakpoint, useRow } from '../composables/index'
import { ProFormMenu, useFormMethods } from '../Form/index'
import { formEmits, formKeys } from '../Form/props'
import { arrayFormProps } from './props'
import ProArrayFormContent from './ArrayFormContent'

export default defineComponent({
  name: 'ProArrayForm',
  props: arrayFormProps,
  emits: formEmits,
  setup(props, { emit, slots, expose }) {
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

    expose({
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
    })

    return () =>
      h(
        ElForm,
        mergeProps(config, {
          ref: formRef,
          model: props.modelValue,
          inline: props.inline,
          labelPosition: labelPosition.value,
          style: !props.inline ? rowStyle.value : undefined,
          class: [
            'pro-array-form',
            'pro-form',
            !props.inline ? rowClass.value : '',
          ],
          onSubmit: (e: Event) => {
            e.preventDefault()
          },
        }),
        () => [
          h(
            ProArrayFormContent,
            {
              modelValue: props.modelValue,
              columns: props.columns,
              inline: props.inline,
              max: props.max,
              'onUpdate:modelValue': update,
            },
            slots
          ),
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
