import { defineComponent, h, mergeProps, Slot } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { get, isFunction } from '../utils/index'
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
                    // NOTE: Remove `detail: props.detail` on next major release
                    return (slots[item.prop] as Slot)({
                      size: props.size,
                      item: props.detail,
                      detail: props.detail,
                    })
                  } else if (item.render) {
                    return isFunction(item.render)
                      ? item.render(props.detail)
                      : String(item.render)
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
                  } else if (item.renderLabel) {
                    return isFunction(item.renderLabel)
                      ? item.renderLabel(item)
                      : String(item.renderLabel)
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
      h(ElDescriptions, mergeProps(confog, { class: 'pro-descriptions' }), {
        default: () => createDefault(),
        title: () =>
          slots['title'] ? slots['title']({ size: props.size }) : null,
        extra: () =>
          slots['extra'] ? slots['extra']({ size: props.size }) : null,
      })
  },
})
