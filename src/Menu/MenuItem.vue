<template>
  <el-menu-item
    v-if="item && !hasMultiChild(item)"
    :index="item.redirect || item.path"
  >
    <slot v-bind="item" />
  </el-menu-item>
  <el-submenu
    v-else-if="item"
    :index="item.path"
  >
    <template
      v-if="item.meta?.icon || item.meta?.title"
      #title
    >
      <slot v-bind="item" />
    </template>
    <template
      v-for="child in item.children"
      :key="child.path"
    >
      <menu-item :item="child">
        <slot v-bind="child" />
      </menu-item>
    </template>
  </el-submenu>
</template>

<script lang="ts">
export default { name: 'ProMenuItem' }
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { ElMenuItem, ElSubmenu } from 'element-plus'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{ item: IRouteRecordRaw }>()
const item = computed(() => {
  return props.item.meta?.hidden ? undefined : props.item
})

function hasMultiChild(item: IRouteRecordRaw) {
  return item.children
    ? item.children.filter((item) => !item.meta?.hidden).length > 1
    : false
}
</script>
