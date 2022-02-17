import { defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'
import { breadcrumbProps, ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { ProLink } from '../Link/index'

export default defineComponent({
  name: 'ProBreadcrumb',
  props: breadcrumbProps,
  setup(props) {
    const route = useRoute()

    return () =>
      h(
        ElBreadcrumb,
        {
          ...props,
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
