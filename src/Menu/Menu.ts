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
import { menuProps } from './props'

export default defineComponent({
  name: 'ProMenu',
  props: menuProps,
  setup(props, { slots }) {
    const route = useRoute()
    const routes = useCurrentRoutes()

    function createDefault(item: RouteRecordRaw) {
      if (slots.default) {
        return slots.default(item)
      } else {
        return [
          item.meta?.icon &&
            h(resolveDynamicComponent(item.meta.icon) as DefineComponent, {
              class: 'el-icon',
            }),
          item.meta?.title && h('span', item.meta.title),
        ]
      }
    }

    function hasMultiChild(item: RouteRecordRaw) {
      if (!item.children) return false

      let count = 0
      let index = 0

      while (count < 2 && index < item.children.length) {
        if (!item.children[index].meta?.hidden) {
          count++
        }
        index++
      }

      return count >= 2
    }

    function createList(list?: RouteRecordRaw[]) {
      if (!list) return undefined
      return list.map((item) => {
        const showItem = item && !item.meta?.hidden

        if (showItem && !hasMultiChild(item)) {
          return h(
            ElMenuItem,
            { index: item.children?.[0].path || item.path },
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
