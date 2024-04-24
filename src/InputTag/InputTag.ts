import { defineComponent, h, mergeProps } from 'vue'
import { ElInput, ElTag } from 'element-plus'
import { useInputTag, InputTagCore } from './useInputTag'
import { inputTagProps, inputTagEmits } from './props'
import type { DefineComponent, VNode } from 'vue'
import type { IInputTagProps } from './index'
import type { IAutocompleteTagProps } from '../AutocompleteTag/index'
import type { StringObject } from '../types/index'

export function createDefault<
  T,
  Q extends IInputTagProps | IAutocompleteTagProps,
>(component: T, core: InputTagCore<Q>): VNode[] {
  const vNode: VNode[] = core.list.value.map((item, index) =>
    h(
      ElTag,
      mergeProps(core.tagProps as StringObject, {
        size: core.size.value,
        closable: core.closable.value,
        class: core.selectedTag.value === index && 'is-selecte',
        onClose: () => core.close(index),
      }),
      () => item,
    ),
  )
  vNode.push(
    h(
      component as DefineComponent,
      mergeProps(core.inputProps as StringObject, core.attrs.value, {
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
      }),
    ),
  )
  return vNode
}

export default defineComponent({
  name: 'ProInputTag',
  props: inputTagProps,
  emits: inputTagEmits,
  setup(props, { emit }) {
    const core = useInputTag<IInputTagProps>(props, emit)

    return () =>
      h(
        'div',
        {
          class: ['pro-input-tag', core.focused.value && 'is-focus'],
          onClick: core.inputRef.value?.focus,
        },
        createDefault<typeof ElInput, IInputTagProps>(ElInput, core),
      )
  },
})
