import {
  DefineComponent,
  defineComponent,
  h,
  resolveDynamicComponent,
} from 'vue'
import { useRoute } from 'vue-router'
import { ElMenu } from 'element-plus'
import { useCurrentRoutes } from '../composables/index'
import props from './props'
import ProMenuItem from './MenuItem'
import ProLink from '../Link/index'
import type { IRouteRecordRaw } from '../types/index'

export default defineComponent({
  name: 'ProMenu',
  props,
  setup(props, { slots }) {
    const route = useRoute()
    const routes = useCurrentRoutes(props)

    function createDefault(item: IRouteRecordRaw) {
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

    return () =>
      h(
        ElMenu,
        {
          defaultActive: route?.path,
          mode: props.mode,
          defaultOpeneds: props.defaultOpeneds,
          uniqueOpened: props.uniqueOpened,
          menuTrigger: props.menuTrigger,
          collapse: props.collapse,
          backgroundColor: props.backgroundColor,
          textColor: props.textColor,
          activeTextColor: props.activeTextColor,
          collapseTransition: props.collapseTransition,
          class: 'pro-menu',
        },
        () =>
          routes.value.map((menu) => {
            return h(
              ProMenuItem,
              { item: menu },
              { default: (scope: IRouteRecordRaw) => createDefault(scope) }
            )
          })
      )
  },
})
