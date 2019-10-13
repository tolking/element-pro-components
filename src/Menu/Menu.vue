<template>
  <el-menu :default-active="$route.path" v-bind="$attrs" class="pro-menu">
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
import { filterRouterByHidden } from 'element-pro-components/src/utils/router'

export default {
  name: 'ProMenu',
  components: { MenuItem },
  provide() {
    return {
      useSvg: this.useSvg
    }
  },
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
      return filterRouterByHidden(routerList)
    }
  }
}
</script>

<style>
.pro-menu .el-menu-item {
  padding: 0;
}
.pro-menu .el-menu-item .pro-link {
  display: block;
}
.pro-menu.el-menu--horizontal .el-menu-item .pro-link {
  padding: 0 20px;
}
</style>
