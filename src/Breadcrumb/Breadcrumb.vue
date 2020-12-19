<template>
  <el-breadcrumb class="pro-breadcrumb">
    <el-breadcrumb-item
      v-for="item in breadcrumbList"
      :key="item.path"
    >
      <router-link :to="item.path">
        {{ item.meta.title }}
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed, defineComponent, defineProps, toRaw, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { findRouterItemListByPath } from '../utils/index'
import { useCurrentRoutes } from '../composables/index'
import type { ProRouteRecordRaw } from '../types/index'

const props = defineProps<{ routes?: ProRouteRecordRaw[] }>()
const { routes } = toRefs(props)
const route = useRoute()
const currentRoutes = useCurrentRoutes(routes?.value as ProRouteRecordRaw[])
const breadcrumbList = computed(() => findRouterItemListByPath(currentRoutes.value, route.path))
</script>
