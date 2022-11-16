import { defineComponent, h, mergeProps } from 'vue'
import { useFormInject, useCreateLabel } from './useForm'
import { getGroupFormItemBind } from './utils'
import { groupFormProps, formItemEmits } from './props'
import ProFormList from './FormList'
import type { UnknownObject } from '../types/index'
import type { GroupFormColumn } from './type'

export default defineComponent({
  name: 'ProGroupForm',
  props: groupFormProps,
  emits: formItemEmits,
  setup(props, { emit, attrs }) {
    const form = useFormInject()
    const createLabel = useCreateLabel(props)

    function update(value: UnknownObject) {
      emit('update:modelValue', value)
    }

    function createDefault(item: GroupFormColumn) {
      return [
        h(
          'div',
          mergeProps(getGroupFormItemBind(item), attrs, {
            class: ['pro-group-form-title', !form?.props.inline && 'el-col-24'],
          }),
          createLabel(item)
        ),
        h(
          ProFormList,
          mergeProps(props, {
            columns: item.children,
            'onUpdate:modelValue': update,
          })
        ),
      ]
    }

    return () => props.columns?.map(createDefault)
  },
})
