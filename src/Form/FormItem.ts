import { defineComponent, h, Slot, VNode, mergeProps, toRef } from 'vue'
import { ElFormItem, useSize } from 'element-plus'
import { useCol } from '../composables/index'
import { get, set, has } from '../utils/index'
import { useCreateLabel, useFormInject } from './useForm'
import { getFormItemBind } from './utils'
import { formItemProps, formItemEmits } from './props'
import ProFormList from './FormList'
import ProFormComponent from './FormComponent'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProFormItem',
  props: formItemProps,
  emits: formItemEmits,
  setup(props, { emit }) {
    const item = toRef(props, 'item')
    const form = useFormInject()
    const size = useSize()
    const createLabel = useCreateLabel(props)
    const { colStyle, colClass } = useCol(item)

    function update(value: unknown) {
      emit('update:modelValue', set(props.modelValue, item.value.prop, value))
    }

    function createError(scope: UnknownObject) {
      if (form?.slots[`form-${item.value.prop}-error`]) {
        return (form?.slots[`form-${item.value.prop}-error`] as Slot)({
          ...scope,
          item: item.value,
          indexes: props.indexes,
        })
      }
    }

    function createDefault() {
      !has(props.modelValue, item.value.prop) && update(undefined)
      const currentValue = get(props.modelValue, item.value.prop, undefined)
      let list: VNode[] = []

      if (props.item.children?.length) {
        list = list.concat(
          h(ProFormList, {
            modelValue: currentValue,
            columns: props.item.children,
            prefix: props.prefix,
            indexes: props.indexes,
            max: props.item.max,
            type: props.item.type || 'array',
            'onUpdate:modelValue': update,
          }),
        )
      } else if (form?.slots[`form-${item.value.prop}`]) {
        list = list.concat(
          (form?.slots[`form-${item.value.prop}`] as Slot)({
            item: item.value,
            indexes: props.indexes,
            value: currentValue,
            setValue: update,
          }),
        )
      } else if (item.value.component) {
        list.push(
          h(
            ProFormComponent,
            mergeProps(item.value.props || {}, {
              is: item.value.component,
              modelValue: currentValue,
              modelKey: item.value.modelKey,
              'onUpdate:modelValue': update,
            }),
          ),
        )
      }

      return list
    }

    return () =>
      item.value.show === false
        ? null
        : h(
            ElFormItem,
            mergeProps({ size: size.value }, getFormItemBind(item.value), {
              prop: props.prefix,
              style: !form?.props.inline ? colStyle.value : undefined,
              class: ['pro-form-item', !form?.props.inline && colClass.value],
            }),
            {
              label: () => createLabel(item.value),
              error: (scope: UnknownObject) => createError(scope),
              default: () => createDefault(),
            },
          )
  },
})
