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
import { ProLink } from '../Link/index'
import type { IRouteRecordRaw } from '../types/index'
import type { IMenuProps } from './index'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createMenuProps(props: IMenuProps) {
  return {
    defaultOpeneds: props.defaultOpeneds,
    uniqueOpened: props.uniqueOpened,
    menuTrigger: props.menuTrigger,
    backgroundColor: props.backgroundColor,
    textColor: props.textColor,
    activeTextColor: props.activeTextColor,
    collapseTransition: props.collapseTransition,
  }
}

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

    return () => {
      const config = createMenuProps(props)
      return h(
        ElMenu,
        Object.assign(
          {
            defaultActive: route?.path,
            mode: props.mode,
            collapse: props.collapse,
            class: 'pro-menu',
          },
          config
        ),
        () =>
          routes.value.map((menu) => {
            return h(
              ProMenuItem,
              { item: menu },
              { default: (scope: IRouteRecordRaw) => createDefault(scope) }
            )
          })
      )
    }
  },
})
