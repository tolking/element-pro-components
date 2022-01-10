import { computed, defineComponent, h, PropType } from 'vue'
import { ElMenuItem, ElSubMenu } from 'element-plus'
import ProMenuItem from './MenuItem'
import type { IRouteRecordRaw } from '../types/index'

export default defineComponent({
  name: 'ProMenuItem',
  props: {
    item: {
      type: Object as PropType<IRouteRecordRaw>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const item = computed(() => {
      return props.item.meta?.hidden ? undefined : props.item
    })

    function hasMultiChild(item: IRouteRecordRaw) {
      return item.children
        ? item.children.filter((item) => !item.meta?.hidden).length > 1
        : false
    }

    return () => {
      if (item.value && !hasMultiChild(item.value)) {
        return h(
          ElMenuItem,
          { index: (item.value.redirect || item.value.path) as string },
          () => slots.default && slots.default(item.value)
        )
      } else if (item.value) {
        return h(
          ElSubMenu,
          { index: item.value.path },
          {
            title: () =>
              slots.default && slots.default({ meta: item.value?.meta }),
            default: () =>
              item.value?.children?.map((child) => {
                return h(ProMenuItem, { item: child }, slots.default)
              }),
          }
        )
      } else {
        return undefined
      }
    }
  },
})
