<template>
  <el-breadcrumb class="pro-breadcrumb">
    <el-breadcrumb-item
      v-for="item in list"
      :key="item.path"
    >
      <pro-link
        v-if="item.meta"
        :to="item.path"
      >
        {{ item.meta.title }}
      </pro-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
export default { name: 'ProBreadcrumb' }
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { findRouterItemListByPath } from '../utils/index'
import { useCurrentRoutes } from '../composables/index'
import ProLink from '../Link/index'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{ routes?: IRouteRecordRaw[] }>()
const route = useRoute()
const routes = useCurrentRoutes(props)
const list = computed(() => {
  return findRouterItemListByPath(routes.value, route.path)
})
</script>
