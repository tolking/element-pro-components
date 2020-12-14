<template>
  <el-menu :default-active="route.path" class="pro-menu" @select="handleSelect">
    <pro-menu-item
      v-for="item in menuRouters"
      :key="item.path"
      :item="item"
    >
      <template #default="item">
        <slot v-bind="item">
          <i v-if="item.meta.icon" :class="item.meta.icon" />
          <span v-if="item.meta.title">{{ item.meta.title }}</span>
        </slot>
      </template>
    </pro-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed, defineProps, toRaw, toRefs, useContext } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { ElMenu } from 'element-plus'
import ProMenuItem from './ProMenuItem.vue'
import { checkUrl, filterRouterByHidden } from '../utils/index'

const props = defineProps<{ routers?: RouteRecordRaw[] }>()
const { routers } = toRefs(props)
const route = useRoute()
const router = useRouter()
const menuRouters = computed(() => {
  const _routers = toRaw(routers!.value as RouteRecordRaw[])
  const _menuRouters = _routers && _routers.length ? _routers : router.options.routes
  return filterRouterByHidden(_menuRouters)
})

function handleSelect(path: string) {
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
</style>
