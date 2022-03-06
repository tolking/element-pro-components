import { defineComponent, h, VNode } from 'vue'
import { ElInput, ElTag } from 'element-plus'
import { useInputTag, InputTagCore } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import props from './props'

export function createDefault<T>(component: T, core: InputTagCore): VNode[] {
  const vNode: VNode[] = core.list.value.map((item, index) =>
    h(
      ElTag,
      {
        ...core.tagProps,
        size: core.size.value,
        closable: core.closable.value,
        onClose: () => core.close(index),
      },
      () => item
    )
  )
  vNode.push(
    h(component, {
      ...core.inputProps,
      ...core.attrs.value,
      modelValue: core.input.value,
      size: core.size.value,
      disabled: core.disabled.value,
      type: 'text',
      onSelect: core.add,
      onBlur: core.add,
      onKeyup: core.keyup,
      'onUpdate:modelValue': core.change,
    })
  )
  return vNode
}

export default defineComponent({
  name: 'ProInputTag',
  props,
  emits: modelValueEmit,
  setup(props, { emit }) {
    const core = useInputTag(props, emit)

    return () =>
      h(
        'div',
        { class: 'pro-input-tag' },
        createDefault<typeof ElInput>(ElInput, core)
      )
  },
})
