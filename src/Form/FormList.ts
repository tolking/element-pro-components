import { defineComponent, h, VNode } from 'vue'
import { isArray, isUndefined, withPoint } from '../utils/index'
import { formEmits, formListProps } from './props'
import ProArrayForm from './ArrayForm'
import ProGroupForm from './GroupForm'
import ProTabsForm from './TabsForm'
import ProCollapseForm from './CollapseForm'
import ProStepsForm from './StepsForm'
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

    function createColumn() {
      if (!props.columns) return

      const list: VNode[] = []
      const len = props.columns.length
      let cacheType: GroupFormType | undefined = undefined
      let left = 0
      let right = left

      const sliceGroup = () => {
        if (!props.columns || !cacheType) return
        const columns = props.columns.slice(left, right) as GroupFormColumns
        const componentsMap = {
          group: ProGroupForm,
          tabs: ProTabsForm,
          collapse: ProCollapseForm,
          steps: ProStepsForm,
        }

        list.push(
          h(componentsMap[cacheType], {
            key: `${left}__${right}`,
            modelValue: props.modelValue,
            columns,
            prefix: props.prefix,
            indexes: props.indexes,
            'onUpdate:modelValue': update,
          }),
        )
        cacheType = undefined
        left = right
      }

      while (left < len && right < len) {
        const item = props.columns[right]
        const prefix = withPoint(props.prefix, item.prop)

        if (item?.type && item.type !== 'array') {
          if (!cacheType && left + 1 !== len) {
            cacheType = item.type
            right = left + 1
          } else if (cacheType === item.type && right + 1 !== len) {
            right++
          } else {
            if (cacheType !== item.type) {
              sliceGroup()
              cacheType = item.type
            }
            right++
            right === len && sliceGroup()
          }
        } else {
          cacheType && sliceGroup()
          list.push(
            h(ProFormItem, {
              key: item.prop,
              modelValue: props.modelValue,
              item,
              indexes: props.indexes,
              prefix,
              'onUpdate:modelValue': update,
            }),
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
