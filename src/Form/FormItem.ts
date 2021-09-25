import { defineComponent, h, toRefs, PropType, Slot, VNode } from 'vue'
import { ElFormItem, ElButton } from 'element-plus'
import { useFormItemBind, useFormChild, useCol } from '../composables/index'
import { isArray } from '../utils/index'
import ProFormItem from './FormItem'
import ProFormComponent from './FormComponent'
import type { FormColumn, IFormColumns, UnknownObject } from '../types/index'

export default defineComponent({
  name: 'ProFormItem',
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    item: {
      type: Object as PropType<FormColumn>,
      default: () => ({}),
    },
    prop: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { item, prop, modelValue, inline } = toRefs(props)
    const bindItem = useFormItemBind(item)
    const { colStyle, colClass } = useCol(item)
    const { hasChild, showAddBtn, add, del, upChildData } = useFormChild(
      props,
      emit
    )

    function upData(value: unknown) {
      const _model = { ...modelValue.value }
      _model[item.value.prop] = value
      emit('update:modelValue', _model)
    }

    function createLabel() {
      if (slots[item.value.prop + '-label']) {
        return (slots[item.value.prop + '-label'] as Slot)()
      }
    }

    function createError(scope: unknown) {
      if (slots[item.value.prop + '-error']) {
        return (slots[item.value.prop + '-error'] as Slot)(scope)
      }
    }

    function createDefault() {
      const currentValue = modelValue.value[item.value.prop]
      let list: VNode[] = []

      if (hasChild.value) {
        if (isArray(currentValue)) {
          const child = (currentValue as UnknownObject[]).map(
            (value, index) => {
              return h('div', { class: 'children-form' }, [
                h(
                  'div',
                  {
                    class: [
                      !inline.value ? 'el-row' : '',
                      'children-form-item',
                    ],
                  },
                  (item.value.children as IFormColumns).map((child) => {
                    return h(
                      ProFormItem,
                      {
                        modelValue: value,
                        item: child,
                        prop: `${prop.value}.${index}.${child.prop}`,
                        'onUpdate:modelValue': (childValue: UnknownObject) =>
                          upChildData(childValue, index),
                      },
                      slots
                    )
                  })
                ),
                h(ElButton, {
                  icon: 'el-icon-minus',
                  type: 'danger',
                  circle: true,
                  class: 'delete-bth',
                  onClick: () => del(index),
                }),
              ])
            }
          )
          list = list.concat(child)
        }
        showAddBtn.value &&
          list.push(
            h(ElButton, {
              icon: 'el-icon-plus',
              type: 'primary',
              circle: true,
              onClick: add,
            })
          )
      } else if (slots[item.value.prop]) {
        list = list.concat(
          (slots[item.value.prop] as Slot)({
            item,
            value: currentValue,
            setValue: upData,
          })
        )
      } else {
        list.push(
          h(ProFormComponent, {
            ...item.value.props,
            is: item.value.component,
            modelValue: currentValue,
            'onUpdate:modelValue': upData,
          })
        )
      }

      return list
    }

    return () =>
      h(
        ElFormItem,
        {
          ...bindItem.value,
          prop: hasChild.value ? undefined : prop.value,
          style: !inline.value ? colStyle.value : undefined,
          class: ['pro-form-item', !inline.value ? colClass.value : ''],
        },
        {
          label: () => createLabel(),
          error: (scope: unknown) => createError(scope),
          default: () => createDefault(),
        }
      )
  },
})
