import { computed, defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { findRouterPath } from '../utils/index'
import { useCurrentRoutes } from '../composables/index'
import props from './props'
import ProLink from '../Link/index'

export default defineComponent({
  name: 'ProBreadcrumb',
  props,
  setup(props) {
    const route = useRoute()
    const routes = useCurrentRoutes(props)
    const list = computed(() => {
      return findRouterPath(routes.value, route.path, route.name)
    })

    return () =>
      h(
        ElBreadcrumb,
        {
          separator: props.separator,
          separatorClass: props.separatorClass,
          class: 'pro-breadcrumb',
        },
        () =>
          list.value.map((item) =>
            h(ElBreadcrumbItem, null, () =>
              h(ProLink, { to: item.path }, () => item.meta?.title)
            )
          )
      )
  },
})
