import { defineComponent, h, toRefs, Slot, VNode, mergeProps } from 'vue'
import { ElFormItem } from 'element-plus'
import { useCol } from '../composables/index'
import { get, set, has, throwWarn } from '../utils/index'
import { useFormItemBind } from './useForm'
import { formItemProps, formItemEmits } from './props'
import ProArrayForm from './ArrayForm'
import ProFormComponent from './FormComponent'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProFormItem',
  props: formItemProps,
  emits: formItemEmits,
  setup(props, { slots, emit }) {
    const { item, prop, modelValue, inline } = toRefs(props)
    const bindItem = useFormItemBind(item)
    const { colStyle, colClass } = useCol(item)

    function update(value: unknown) {
      emit('update:modelValue', set(modelValue.value, item.value.prop, value))
    }

    function createLabel() {
      if (slots[`form-${item.value.prop}-label`]) {
        return (slots[`form-${item.value.prop}-label`] as Slot)({
          item: item.value,
          indexes: props.indexes,
        })
      } else if (slots[`${item.value.prop}-label`]) {
        // NOTE: Remove this on next major release
        throwWarn(
          `[ProForm] the [prop]-label slot will to remove, use 'form-[prop]-label' replace ${item.value.prop}-label`
        )
        return (slots[`${item.value.prop}-label`] as Slot)({ item: item.value })
      }
    }

    function createError(scope: UnknownObject) {
      if (slots[`form-${item.value.prop}-error`]) {
        return (slots[`form-${item.value.prop}-error`] as Slot)({
          ...scope,
          item: item.value,
          indexes: props.indexes,
        })
      } else if (slots[`${item.value.prop}-error`]) {
        // NOTE: Remove this on next major release
        throwWarn(
          `[ProForm] the [prop]-error slot will to remove, use 'form-[prop]-error' replace ${item.value.prop}-error`
        )
        return (slots[`${item.value.prop}-error`] as Slot)({
          ...scope,
          item: item.value,
        })
      }
    }

    function createDefault() {
      !has(modelValue.value, item.value.prop) && update(undefined)
      const currentValue = get(modelValue.value, item.value.prop, undefined)
      let list: VNode[] = []

      if (props.item.children?.length) {
        list = list.concat(
          h(
            ProArrayForm,
            {
              modelValue: currentValue,
              columns: props.item.children,
              prop: props.prop,
              indexes: props.indexes,
              inline: props.inline,
              max: props.item.max,
              'onUpdate:modelValue': update,
            },
            slots
          )
        )
      } else if (slots[`form-${item.value.prop}`]) {
        list = list.concat(
          (slots[`form-${item.value.prop}`] as Slot)({
            item: item.value,
            indexes: props.indexes,
            value: currentValue,
            setValue: update,
          })
        )
      } else if (slots[item.value.prop]) {
        // NOTE: Remove this on next major release
        throwWarn(
          `[ProForm] the [prop] slot will to remove, use 'form-[prop]' replace ${item.value.prop}`
        )
        list = list.concat(
          (slots[item.value.prop] as Slot)({
            item,
            value: currentValue,
            setValue: update,
          })
        )
      } else {
        list.push(
          h(
            ProFormComponent,
            mergeProps(item.value.props || {}, {
              is: item.value.component,
              modelValue: currentValue,
              'onUpdate:modelValue': update,
            })
          )
        )
      }

      return list
    }

    return () =>
      h(
        ElFormItem,
        mergeProps(bindItem.value, {
          prop: prop.value,
          style: !inline.value ? colStyle.value : undefined,
          class: ['pro-form-item', !inline.value ? colClass.value : ''],
        }),
        {
          label: () => createLabel(),
          error: (scope: UnknownObject) => createError(scope),
          default: () => createDefault(),
        }
      )
  },
})
