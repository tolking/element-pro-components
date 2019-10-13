<template>
  <el-breadcrumb v-bind="$attrs" class="pro-breadcrumb">
    <el-breadcrumb-item
      v-for="item in breadcrumbList"
      :key="item.name || item.redirect || item.path"
    >
      <pro-link :to="item">{{ item.meta.title || item.name }}</pro-link>
    </el-breadcrumb-item>
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
    breadcrumbList() {
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
