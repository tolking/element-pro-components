import { defineComponent, h, mergeProps, VNode } from 'vue'
import { ElInput, ElTag } from 'element-plus'
import { useInputTag, InputTagCore } from './useInputTag'
import { inputTagProps, inputTagEmits } from './props'

export function createDefault<T>(component: T, core: InputTagCore): VNode[] {
  const vNode: VNode[] = core.list.value.map((item, index) =>
    h(
      ElTag,
      mergeProps(core.tagProps, {
        size: core.size.value,
        closable: core.closable.value,
        class: core.selectedTag.value === index && 'is-selecte',
        onClose: () => core.close(index),
      }),
      () => item
    )
  )
  vNode.push(
    h(
      component,
      mergeProps(core.inputProps, core.attrs.value, {
        ref: core.inputRef,
        modelValue: core.input.value,
        size: core.size.value,
        disabled: core.disabled.value,
        type: 'text',
        onSelect: core.add,
        onFocus: core.focus,
        onBlur: () => core.add(true),
        onKeyup: core.keyup,
        'onUpdate:modelValue': core.change,
      })
    )
  )
  return vNode
}

export default defineComponent({
  name: 'ProInputTag',
  props: inputTagProps,
  emits: inputTagEmits,
  setup(props, { emit }) {
    const core = useInputTag(props, emit)

    return () =>
      h(
        'div',
        {
          class: ['pro-input-tag', core.focused.value && 'is-focus'],
          onClick: core.inputRef.value?.focus,
        },
        createDefault<typeof ElInput>(ElInput, core)
      )
  },
})
