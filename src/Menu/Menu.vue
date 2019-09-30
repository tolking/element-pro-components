<template>
  <el-menu :default-active="$route.path" v-bind="$attrs">
    <menu-item
      v-for="route in $menuList"
      :key="route.path"
      :item="route"
      :useSvg="useSvg"
    />
  </el-menu>
</template>

<script>
import MenuItem from './MenuItem'
import { routerFilterByHidden } from '../utils/router'

export default {
  name: 'ProMenu',
  components: { MenuItem },
  props: {
    routers: {
      type: Array,
      default: () => []
    },
    useSvg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    $menuList() {
      const routerList = this.routers.length
        ? this.routers
        : this.$router.options.routes
      return routerFilterByHidden(routerList)
    }
  }
}
</script>
