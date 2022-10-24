import { defineComponent, h, VNode } from 'vue'
import { isArray, isUndefined } from '../utils/index'
import { formEmits, formListProps } from './props'
import ProArrayForm from './ArrayForm'
import ProGroupForm from './GroupForm'
import ProFormItem from './FormItem'
import type { UnknownObject } from '../types/index'
import type { GroupFormColumn, GroupFormType } from './type'

type GroupFormColumns = Array<GroupFormColumn & UnknownObject>

export default defineComponent({
  name: 'ProFormList',
  props: formListProps,
  emits: formEmits,
  setup(props, { emit }) {
    function update(value: unknown) {
      emit('update:modelValue', value)
    }

    function createGroup(type: GroupFormType, columns: GroupFormColumns) {
      switch (type) {
        case 'group':
          return h(ProGroupForm, {
            modelValue: props.modelValue,
            columns,
            prefix: props.prefix,
            indexes: props.indexes,
            'onUpdate:modelValue': update,
          })
      }
    }

    function createColumn() {
      if (!props.columns) return

      const list: VNode[] = []
      const len = props.columns.length
      let cacheType: GroupFormType | undefined = undefined
      let left = 0
      let right = left

      while (left < len && right < len) {
        const item = props.columns[right]
        const prefix = `${props.prefix}${props.prefix ? '.' : ''}${item.prop}`

        if (item?.type && item.type !== 'array') {
          if (!cacheType && left + 1 !== len) {
            cacheType = item.type
            right = left + 1
          } else if (cacheType === item.type && right + 1 !== len) {
            right++
          } else {
            right = left + 1 === len || right + 1 === len ? len : right
            const columns = props.columns.slice(left, right) as GroupFormColumns

            list.push(createGroup(cacheType || item.type, columns))
            cacheType = item.type
            left = right
            right++
          }
        } else {
          if (cacheType) {
            const columns = props.columns.slice(left, right) as GroupFormColumns

            list.push(createGroup(cacheType, columns))
            cacheType = undefined
            left = right
          }

          list.push(
            h(ProFormItem, {
              modelValue: props.modelValue,
              item,
              indexes: props.indexes,
              prefix,
              'onUpdate:modelValue': update,
            })
          )

          left++
          right++
        }
      }

      return list
    }

    return () => {
      if (props.type === 'array') {
        if (!isArray(props.modelValue) && !isUndefined(props.modelValue)) {
          update(undefined)
        }
        return h(ProArrayForm, {
          modelValue: props.modelValue as UnknownObject[] | undefined,
          columns: props.columns,
          prefix: props.prefix,
          indexes: props.indexes,
          max: props.max,
          'onUpdate:modelValue': update,
        })
      } else {
        return createColumn()
      }
    }
  },
})
