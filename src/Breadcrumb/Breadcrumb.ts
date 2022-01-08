import { defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import props from './props'
import { ProLink } from '../Link/index'

export default defineComponent({
  name: 'ProBreadcrumb',
  props,
  setup(props) {
    const route = useRoute()

    return () =>
      h(
        ElBreadcrumb,
        {
          separator: props.separator,
          separatorIcon: props.separatorIcon,
          class: 'pro-breadcrumb',
        },
        () =>
          route.matched.map((item) =>
            h(ElBreadcrumbItem, null, () =>
              h(ProLink, { to: item.path }, () => item.meta?.title)
            )
          )
      )
  },
})
