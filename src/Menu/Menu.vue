<template>
  <el-menu
    :default-active="route.path"
    class="pro-menu"
    @select="handleSelect"
  >
    <pro-menu-item
      v-for="menu in routes"
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
import { defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMenu } from 'element-plus'
import ProMenuItem from './MenuItem.vue'
import { useCurrentRoutes } from '../composables/index'
import { checkUrl } from '../utils/index'
import type { ProRouteRecordRaw } from '../types/index'

const props = defineProps<{ routes?: ProRouteRecordRaw[] }>()
const route = useRoute()
const router = useRouter()
const routes = useCurrentRoutes(props)

function handleSelect(path: string) {
  if (checkUrl(path)) {
    window.open(path)
  } else {
    router.push(path)
  }
}
</script>

<style lang="postcss">
.pro-menu.el-menu {
  border-right: 0;
}
</style>
