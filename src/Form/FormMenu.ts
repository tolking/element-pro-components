import { computed, defineComponent, h, mergeProps, VNode } from 'vue'
import { ElFormItem, ElButton } from 'element-plus'
import { useFormMenu } from './useForm'
import { formMenuProps, formEmits } from './props'

export default defineComponent({
  name: 'ProFormMenu',
  props: formMenuProps,
  emits: formEmits,
  setup(props, { slots }) {
    const menu = useFormMenu(props)
    const menuStyle = computed(() => {
      if (props.gutter) {
        return {
          paddingLeft: `${props.gutter / 2}px`,
          paddingRight: `${props.gutter / 2}px`,
        }
      }
      return {}
    })

    return () => {
      let list: VNode[] = []

      if (slots['menu-left']) {
        list = list.concat(slots['menu-left']({ loading: props.loading }))
      }
      if (menu.value.submit) {
        list.push(
          h(
            ElButton,
            mergeProps(menu.value.submitProps || {}, {
              loading: props.loading,
              onClick: props.submitForm,
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
              loading: props.loading,
              onClick: () => props.resetForm?.(),
            }),
            () => menu.value.resetText
          )
        )
      }
      if (slots['menu-right']) {
        list = list.concat(slots['menu-right']({ loading: props.loading }))
      }

      return h(
        ElFormItem,
        { class: 'pro-form-menu', style: menuStyle.value },
        () => list
      )
    }
  },
})
