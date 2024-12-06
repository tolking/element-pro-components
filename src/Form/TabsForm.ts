import { defineComponent, h, mergeProps, ref } from 'vue'
import { ElTabPane, ElTabs } from 'element-plus'
import { useRow } from '../composables/index'
import { useFormInject, useCreateLabel } from './useForm'
import { getGroupFormItemBind } from './utils'
import { groupFormProps, tabsFormEmits } from './props'
import ProFormList from './FormList'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProTabsForm',
  props: groupFormProps,
  emits: tabsFormEmits,
  setup(props, { emit }) {
    const form = useFormInject()
    const createLabel = useCreateLabel(props)
    const { rowStyle, rowClass } = useRow(props)
    const active = ref(props.columns?.[0].prop ?? 0)

    function update(value: UnknownObject) {
      emit('update:modelValue', value)
    }

    function createDefault() {
      return props.columns?.map((item, index) => {
        if (item.show === false) return null

        return h(
          ElTabPane,
          mergeProps(getGroupFormItemBind(item), {
            label: item.label,
            name: item.prop ?? index,
            class: !form?.props.inline && rowClass.value,
            style: !props.inline ? rowStyle.value : null,
          }),
          {
            label: () => createLabel(item),
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
        ElTabs,
        {
          modelValue: active.value,
          class: ['pro-tabs-form', !form?.props.inline && 'el-col-24'],
          onTabChange: form?.tabsChange,
          'onUpdate:modelValue': (value) => (active.value = value),
        },
        () => createDefault(),
      )
  },
})
