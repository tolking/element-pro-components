import { defineComponent, h, Slot } from 'vue'
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { get } from '../utils/index'
import props from './props'

export default defineComponent({
  name: 'ProDescriptions',
  props,
  setup(props, { slots }) {
    function createDefault() {
      return props.columns
        ? props.columns.map((item) => {
            return h(
              ElDescriptionsItem,
              {
                label: item.label,
                border: props.border,
                column: props.column,
                direction: props.direction,
                size: props.size,
                title: props.title,
                extra: props.extra,
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
          border: props.border,
          column: props.column,
          direction: props.direction,
          size: props.size,
          title: props.title,
          extra: props.extra,
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
