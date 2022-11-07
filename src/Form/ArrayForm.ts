import { defineComponent, h, markRaw, mergeProps, VNode } from 'vue'
import { ElButton } from 'element-plus'
import { Plus, Minus } from '@element-plus/icons-vue'
import { isArray, withPoint } from '../utils/index'
import { useArrayForm, useFormInject } from './useForm'
import { arrayFormProps, arrayFormEmits } from './props'
import ProFormList from './FormList'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProArrayForm',
  props: arrayFormProps,
  emits: arrayFormEmits,
  setup(props, { emit }) {
    const form = useFormInject()
    const { showAdd, add, remove, update } = useArrayForm(props, emit)

    function createDefault(value: UnknownObject, index: number) {
      const indexes = [...(props.indexes || []), index]
      const prefix = withPoint(props.prefix, index)

      return h('div', { class: 'pro-array-form' }, [
        h(
          'div',
          {
            class: [!form?.props.inline && 'el-row', 'form-content'],
          },
          h(
            ProFormList,
            mergeProps(props, {
              modelValue: value,
              indexes,
              prefix,
              'onUpdate:modelValue': (value: UnknownObject) =>
                update(value, index),
            })
          )
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
