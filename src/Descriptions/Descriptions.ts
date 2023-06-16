import { defineComponent, h, mergeProps, Slot } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { get, isFunction, throwWarn } from '../utils/index'
import { descriptionsProps } from './props'
import type { DescriptionsColumn } from './type'

export default defineComponent({
  name: 'ProDescriptions',
  props: descriptionsProps,
  setup(props, { slots }) {
    const config = reactiveOmit(
      props,
      'columns',
      'detail',
      'align',
      'labelAlign'
    )

    function createDetail(item: DescriptionsColumn) {
      if (slots[`detail-${item.prop}`]) {
        return (slots[`detail-${item.prop}`] as Slot)({
          size: props.size,
          item: props.detail,
        })
      } else if (slots[item.prop]) {
        // NOTE: Remove `detail: props.detail` on next major release
        // NOTE: Remove this on next major release
        throwWarn(
          `[ProDescriptions] the [prop] slot will to remove, use 'detail-[prop]' replace ${item.prop}`
        )
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
    }

    function createLabel(item: DescriptionsColumn) {
      if (slots[`detail-${item.prop}-label`]) {
        return (slots[`detail-${item.prop}-label`] as Slot)({
          size: props.size,
          item,
        })
      } else if (slots[`${item.prop}-label`]) {
        // NOTE: Remove this on next major release
        throwWarn(
          `[ProDescriptions] the [prop]-label slot will to remove, use 'detail-[prop]-label' replace ${item.prop}-label`
        )
        return (slots[`${item.prop}-label`] as Slot)({
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
    }

    function createDefault() {
      return props.columns?.map((item) =>
        h(
          ElDescriptionsItem,
          {
            ...item,
            align: item.align ?? props.align,
            labelAlign: item.labelAlign ?? props.labelAlign,
          },
          {
            default: () => createDetail(item),
            label: () => createLabel(item),
          }
        )
      )
    }

    return () => {
      const children: Record<string, unknown> = {
        default: () => [createDefault(), slots.default && slots.default()],
      }

      if (slots['title']) {
        children.title = () => slots['title']?.({ size: props.size })
      }
      if (slots['extra']) {
        children.extra = () => slots['extra']?.({ size: props.size })
      }

      return h(
        ElDescriptions,
        mergeProps(config, { class: 'pro-descriptions' }),
        children
      )
    }
  },
})
