<template>
  <el-menu v-bind="$attrs" :default-active="route.path" class="pro-menu" @select="handleSelect">
    <menu-item
      v-for="route in routers"
      :key="route.path"
      :item="route"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMenu } from 'element-plus'
import MenuItem from './MenuItem.vue'
import { checkUrl, filterRouterByHidden } from '../utils/index'

const { routers = [] } = defineProps<{ routers: any }>()
const route = useRoute()
const router = useRouter()
const menuRouters = computed(() => {
  const _routers = routers.length ? routers : router.options.routes
  return filterRouterByHidden(_routers)
})

function handleSelect(path) {
  if (checkUrl(path)) {
    window.open(path)
  } else {
    router.push(path)
  }
}
</script>

<style>
.pro-menu.el-menu {
  border-right: 0;
}
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
