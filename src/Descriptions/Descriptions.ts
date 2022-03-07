import { defineComponent, h, Slot } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { get } from '../utils/index'
import props from './props'

export default defineComponent({
  name: 'ProDescriptions',
  props,
  setup(props, { slots }) {
    const confog = reactiveOmit(
      props,
      'columns',
      'detail',
      'align',
      'labelAlign'
    )

    function createDefault() {
      return props.columns
        ? props.columns.map((item) => {
            return h(
              ElDescriptionsItem,
              {
                ...item,
                align: item.align ?? props.align,
                labelAlign: item.labelAlign ?? props.labelAlign,
              },
              {
                default: () => {
                  if (slots[item.prop]) {
                    return (slots[item.prop] as Slot)({
                      size: props.size,
                      detail: props.detail,
                    })
                  } else {
                    return get(props.detail, item.prop, '')
                  }
                },
                label: () => {
                  if (slots[item.prop + '-label']) {
                    return (slots[item.prop + '-label'] as Slot)({
                      size: props.size,
                      item,
                    })
                  } else {
                    return null
                  }
                },
              }
            )
          })
        : null
    }

    return () =>
      h(
        ElDescriptions,
        {
          ...confog,
          class: 'pro-descriptions',
        },
        {
          default: () => createDefault(),
          title: () =>
            slots['title'] ? slots['title']({ size: props.size }) : null,
          extra: () =>
            slots['extra'] ? slots['extra']({ size: props.size }) : null,
        }
      )
  },
})
