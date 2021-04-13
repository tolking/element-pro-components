<template>
  <el-menu-item
    v-if="!hasMultiChild(item)"
    :index="item.redirect || item.path"
  >
    <slot v-bind="item" />
  </el-menu-item>
  <el-submenu
    v-else
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

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { ElMenuItem, ElSubmenu } from 'element-plus'
import MenuItem from './MenuItem.vue'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{ item: IRouteRecordRaw }>()
const { item } = toRefs(props)

function hasMultiChild(item: IRouteRecordRaw) {
  return item.children ? item.children.length > 1 : false
}
</script>
