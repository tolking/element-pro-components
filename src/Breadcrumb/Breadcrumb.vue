<template>
  <el-breadcrumb v-bind="$attrs" class="pro-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in $itemList" :key="item.path">
        <pro-link :to="item.redirect || item.path">{{
          item.meta.title
        }}</pro-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import ProLink from 'element-pro-components/src/Link'
import { findRouterItemListByPath } from 'element-pro-components/src/utils/router'

export default {
  name: 'ProBreadcrumb',
  components: { ProLink },
  props: {
    routers: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    $itemList() {
      const path = this.$route.path
      const routers = this.routers || this.$router.options.routes
      return findRouterItemListByPath(routers, path)
    }
  }
}
</script>

<style>
.pro-breadcrumb {
  display: inline-block;
}
</style>
