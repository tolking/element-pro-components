import {
  DefineComponent,
  defineComponent,
  h,
  mergeProps,
  resolveDynamicComponent,
} from 'vue'
import { useRoute, RouteRecordRaw } from 'vue-router'
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { useCurrentRoutes } from '../composables/index'
import props from './props'
import { ProLink } from '../Link/index'

export default defineComponent({
  name: 'ProMenu',
  props,
  setup(props, { slots }) {
    const route = useRoute()
    const routes = useCurrentRoutes(props)

    function createDefault(item: RouteRecordRaw) {
      if (slots.default) {
        return slots.default(item)
      } else {
        return h(ProLink, { to: item.path }, () => [
          item.meta?.icon &&
            h(resolveDynamicComponent(item.meta.icon) as DefineComponent, {
              class: [item.meta?.icon, 'pro-menu-icon'],
            }),
          item.meta?.title && h('span', item.meta.title),
        ])
      }
    }

    function hasMultiChild(item: RouteRecordRaw) {
      return item.children
        ? item.children.filter((item) => !item.meta?.hidden).length > 1
        : false
    }

    function createList(list?: RouteRecordRaw[]) {
      if (!list) return undefined
      return list.map((item) => {
        const showItem = item && !item.meta?.hidden

        if (showItem && !hasMultiChild(item)) {
          return h(
            ElMenuItem,
            { index: (item.redirect || item.path) as string },
            () => createDefault(item)
          )
        } else if (showItem) {
          return h(
            ElSubMenu,
            { index: item.path },
            {
              title: () =>
                createDefault({ meta: item?.meta } as RouteRecordRaw),
              default: () => createList(item?.children),
            }
          )
        } else {
          return undefined
        }
      })
    }

    return () =>
      h(
        ElMenu,
        mergeProps(props, {
          defaultActive: route?.path,
          class: 'pro-menu',
        }),
        () => createList(routes.value)
      )
  },
})
