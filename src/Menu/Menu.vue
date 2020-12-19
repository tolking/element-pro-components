<template>
  <el-menu
    :default-active="route.path"
    class="pro-menu"
    @select="handleSelect"
  >
    <pro-menu-item
      v-for="menu in menuRouters"
      :key="menu.path"
      :item="menu"
    >
      <template #default="item">
        <slot v-bind="item">
          <i
            v-if="item.meta.icon"
            :class="item.meta.icon"
          />
          <span v-if="item.meta.title">{{ item.meta.title }}</span>
        </slot>
      </template>
    </pro-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMenu } from 'element-plus'
import ProMenuItem from './MenuItem.vue'
import { useCurrentRoutes } from '../composables/index'
import { checkUrl, filterRouterByHidden } from '../utils/index'
import type { ProRouteRecordRaw } from '../types/index'

const props = defineProps<{ routes?: ProRouteRecordRaw[] }>()
const { routes } = toRefs(props)
const route = useRoute()
const router = useRouter()
const currentRoutes = useCurrentRoutes(routes?.value as ProRouteRecordRaw[])
const menuRouters = computed(() => filterRouterByHidden(currentRoutes.value))

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
