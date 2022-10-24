import { defineComponent, h, mergeProps, Slot } from 'vue'
import { useFormInject } from './useForm'
import { groupFormProps, formItemEmits } from './props'
import ProFormList from './FormList'
import type { UnknownObject } from '../types/index'
import type { GroupFormColumn } from './type'

export default defineComponent({
  name: 'ProGroupForm',
  props: groupFormProps,
  emits: formItemEmits,
  setup(props, { emit }) {
    const form = useFormInject()

    function update(value: UnknownObject) {
      emit('update:modelValue', value)
    }

    function createTitle(item: GroupFormColumn) {
      if (form?.slots[`form-${item.prop}-label`]) {
        return (form?.slots[`form-${item.prop}-label`] as Slot)({
          item: item,
          indexes: props.indexes,
        })
      } else {
        return item.label
      }
    }

    function createDefault(item: GroupFormColumn) {
      return [
        h(
          'div',
          {
            class: ['pro-group-form-title', !form?.inline.value && 'el-col-24'],
          },
          createTitle(item)
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
