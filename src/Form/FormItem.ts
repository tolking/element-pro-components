import { defineComponent, h, mergeProps, computed } from 'vue'
import { ElFormItem, useSize } from 'element-plus'
import { useCol } from '../composables/index'
import { get, set, has, throwWarn, isArray } from '../utils/index'
import { useCreateLabel, useFormInject } from './useForm'
import { getFormItemBind } from './utils'
import { formItemProps, formItemEmits } from './props'
import ProFormList from './FormList'
import ProFormComponent from './FormComponent'
import type { Slot, VNode } from 'vue'
import type { UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProFormItem',
  props: formItemProps,
  emits: formItemEmits,
  setup(props, { emit }) {
    const form = useFormInject()
    const size = useSize()
    const createLabel = useCreateLabel(props)
    const { colStyle, colClass } = useCol(props.item)

    const modelProps = computed(() => {
      const list = props.item.models ?? [
        props.item.modelKey
          ? isArray(props.item.modelKey)
            ? {
                prop: props.item.prop,
                key: props.item.modelKey[0],
                event: props.item.modelKey[1],
              }
            : { prop: props.item.prop, key: props.item.modelKey }
          : { prop: props.item.prop, key: 'modelValue' },
      ]

      return list.reduce((all, model) => {
        return {
          ...all,
          [model.key]: get(props.modelValue, model.prop, undefined),
          [model.event ?? `onUpdate:${model.key}`]: (value: unknown) =>
            emit('update:modelValue', set(props.modelValue, model.prop, value)),
        }
      }, {})
    })

    if (props.item.modelKey) {
      throwWarn(
        `[ProForm] The 'modelKey' attribute will be removed in the next major version, please use 'models' instead`,
      )
    }

    function update(value: unknown) {
      emit('update:modelValue', set(props.modelValue, props.item.prop, value))
    }

    function createError(scope: UnknownObject) {
      if (form?.slots[`form-${props.item.prop}-error`]) {
        return (form?.slots[`form-${props.item.prop}-error`] as Slot)({
          ...scope,
          item: props.item,
          indexes: props.indexes,
        })
      }
    }

    function createDefault() {
      !has(props.modelValue, props.item.prop) && update(undefined)
      const currentValue = get(props.modelValue, props.item.prop, undefined)
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
      } else if (form?.slots[`form-${props.item.prop}`]) {
        list = list.concat(
          (form?.slots[`form-${props.item.prop}`] as Slot)({
            ...modelProps.value,
            item: props.item,
            indexes: props.indexes,
            value: currentValue,
            setValue: update,
          }),
        )
      } else if (props.item.component) {
        list.push(
          h(
            ProFormComponent,
            mergeProps(props.item.props || {}, {
              ...modelProps.value,
              is: props.item.component,
            }),
          ),
        )
      }

      return list
    }

    return () =>
      props.item.show === false
        ? null
        : h(
            ElFormItem,
            mergeProps({ size: size.value }, getFormItemBind(props.item), {
              prop: props.prefix,
              style: !form?.props.inline ? colStyle.value : undefined,
              class: ['pro-form-item', !form?.props.inline && colClass.value],
            }),
            {
              label: () => createLabel(props.item),
              error: (scope: UnknownObject) => createError(scope),
              default: () => createDefault(),
            },
          )
  },
})
