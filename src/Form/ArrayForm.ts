import { defineComponent, h, markRaw, VNode } from 'vue'
import { ElButton } from 'element-plus'
import { Plus, Minus } from '@element-plus/icons-vue'
import { isArray } from '../utils/index'
import { useArrayForm } from './useForm'
import ProFormItem from './FormItem'
import { arrayFormProps, arrayFormEmits } from './props'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProArrayForm',
  props: arrayFormProps,
  emits: arrayFormEmits,
  setup(props, { slots, emit }) {
    const { showAdd, add, remove, update } = useArrayForm(props, emit)

    function createDefault(value: UnknownObject, index: number) {
      const indexes = [...(props.indexes || []), index]
      const prefix = `${props.prop}${props.prop ? '.' : ''}${index}`

      return h('div', { class: 'pro-array-form' }, [
        h(
          'div',
          {
            class: [!props.inline ? 'el-row' : '', 'form-content'],
          },
          props.columns?.map((child) => {
            return h(
              ProFormItem,
              {
                modelValue: value,
                item: child,
                indexes,
                prop: `${prefix}.${child.prop}`,
                'onUpdate:modelValue': (value) => update(value, index),
              },
              slots
            )
          })
        ),
        h(ElButton, {
          icon: markRaw(Minus),
          type: 'danger',
          circle: true,
          class: 'form-btn-delete',
          onClick: () => remove(index, indexes),
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
            class: 'form-btn-add',
            onClick: () => add(props.indexes || []),
          })
        )

      return list
    }
  },
})
