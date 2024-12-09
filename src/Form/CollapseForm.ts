import { defineComponent, h, mergeProps, ref } from 'vue'
import { ElCollapse, ElCollapseItem } from 'element-plus'
import { useCreateLabel, useFormInject } from './useForm'
import { getGroupFormItemBind } from './utils'
import { collapseFormEmits, groupFormProps } from './props'
import ProFormList from './FormList'
import type { CollapseModelValue } from 'element-plus'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProCollapseForm',
  props: groupFormProps,
  emits: collapseFormEmits,
  setup(props, { emit }) {
    const form = useFormInject()
    const createLabel = useCreateLabel(props)
    const active = ref<CollapseModelValue>()

    function update(value: UnknownObject) {
      emit('update:modelValue', value)
    }

    function createDefault() {
      return props.columns?.map((item, index) => {
        if (item.show === false) return null

        return h(
          ElCollapseItem,
          mergeProps(getGroupFormItemBind(item), {
            key: item.prop || index,
            title: item.label,
            name: item.prop || index,
          }),
          {
            title: () => createLabel(item),
            default: () =>
              h(
                ProFormList,
                mergeProps(props, {
                  columns: item.children,
                  'onUpdate:modelValue': update,
                }),
              ),
          },
        )
      })
    }

    return () =>
      h(
        ElCollapse,
        {
          modelValue: active.value,
          class: ['pro-collapse-form', !form?.props.inline && 'el-col-24'],
          onChange: form?.collapseChange,
          'onUpdate:modelValue': (value) => (active.value = value),
        },
        () => createDefault(),
      )
  },
})
