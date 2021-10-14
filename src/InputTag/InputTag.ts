import { defineComponent, h, VNode } from 'vue'
import { ElInput, ElTag, useAttrs } from 'element-plus'
import { useInputTag, useFormSize } from '../composables/index'
import props from './props'

export default defineComponent({
  name: 'ProInputTag',
  props,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const attrs = useAttrs()
    const size = useFormSize(props)
    const { input, list, add, close, keyup } = useInputTag(props, emit)

    function changeValue(value: string) {
      input.value = value
    }

    function createDefault() {
      const vNode: VNode[] = list.value.map((item, index) =>
        h(
          ElTag,
          {
            size: size.value,
            type: props.type,
            hit: props.hit,
            color: props.color,
            effect: props.effect,
            closable: true,
            onClose: () => close(index),
          },
          () => item
        )
      )
      vNode.push(
        h(ElInput, {
          ...attrs.value,
          modelValue: input.value,
          size: size.value,
          type: 'text',
          onBlur: add,
          onKeyup: keyup,
          'onUpdate:modelValue': changeValue,
        })
      )

      return vNode
    }

    return () => h('div', { class: 'pro-input-tag' }, createDefault())
  },
})
