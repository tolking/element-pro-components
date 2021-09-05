<template>
  <el-menu
    :default-active="route.path"
    class="pro-menu"
  >
    <pro-menu-item
      v-for="menu in routes"
      :key="menu.path"
      :item="menu"
    >
      <template #default="item">
        <slot v-bind="item">
          <pro-link :to="item.path">
            <component
              :is="item.meta?.icon"
              v-if="item.meta?.icon"
              :class="item.meta?.icon"
              class="pro-menu-icon"
            />
            <span v-if="item.meta?.title">
              {{ item.meta.title }}
            </span>
          </pro-link>
        </slot>
      </template>
    </pro-menu-item>
  </el-menu>
</template>

<script lang="ts">
export default { name: 'ProMenu' }
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ElMenu } from 'element-plus'
import { useCurrentRoutes } from '../composables/index'
import ProMenuItem from './MenuItem.vue'
import ProLink from '../Link/index'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{ routes?: IRouteRecordRaw[] }>()
const route = useRoute()
const routes = useCurrentRoutes(props)
</script>
