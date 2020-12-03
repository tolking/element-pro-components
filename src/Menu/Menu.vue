<template>
  <!-- <el-menu :default-active="$route.path" v-bind="$attrs" class="pro-menu"> -->
  <el-menu v-bind="$attrs" class="pro-menu">
    <menu-item
      v-for="route in routers"
      :key="route.path"
      :item="route"
    />
  </el-menu>
</template>

<script>
import { ElMenu } from 'element-plus'
import MenuItem from './MenuItem.vue'
// import { filterRouterByHidden } from 'element-pro-components/src/utils/router'

export default {
  name: 'ProMenu',
  components: { ElMenu, MenuItem },
  props: {
    routers: {
      type: Array,
      default: () => []
    }
  },
  // computed: {
  //   $menuList() {
  //     // const routerList = this.routers.length
  //     //   ? this.routers
  //     //   : this.$router.options.routes
  //     // return filterRouterByHidden(routerList)
  //     return this.routers
  //   }
  // }
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
