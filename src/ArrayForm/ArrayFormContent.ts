import { defineComponent, h, markRaw, VNode } from 'vue'
import { ElButton } from 'element-plus'
import { Plus, Minus } from '@element-plus/icons-vue'
import { isArray } from '../utils/index'
import ProFormItem from '../Form/FormItem'
import { useArrayForm } from './useArrayForm'
import { arrayFormContentProps, arrayFormEmits } from './props'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProArrayFormContent',
  props: arrayFormContentProps,
  emits: arrayFormEmits,
  setup(props, { slots, emit }) {
    const { showAdd, add, del, update } = useArrayForm(props, emit)

    function createDefault(value: UnknownObject, index: number) {
      return h('div', { class: 'pro-array-form-content' }, [
        h(
          'div',
          {
            class: [
              !props.inline ? 'el-row' : '',
              'pro-array-form-content-item',
            ],
          },
          props.columns?.map((child) => {
            const indexes = [...(props.indexes || []), index]
            const prop = `${props.prop}${props.prop ? '.' : ''}${index}.${
              child.prop
            }`

            function _update(value: UnknownObject | UnknownObject[]) {
              update(value as UnknownObject, index)
            }

            return h(
              ProFormItem,
              {
                modelValue: value,
                item: child,
                indexes,
                prop,
                'onUpdate:modelValue': _update,
              },
              slots
            )
          })
        ),
        h(ElButton, {
          icon: markRaw(Minus),
          type: 'danger',
          circle: true,
          class: 'pro-array-form-btn-delete',
          onClick: () => del(index),
        }),
      ])
    }

    return () => {
      let list: VNode[] = []

      if (isArray(props.modelValue)) {
        list = list.concat(props.modelValue.map(createDefault))
      }
      showAdd.value &&
        list.push(
          h(ElButton, {
            icon: markRaw(Plus),
            type: 'primary',
            circle: true,
            class: 'pro-array-form-btn-add',
            onClick: add,
          })
        )

      return list
    }
  },
})
