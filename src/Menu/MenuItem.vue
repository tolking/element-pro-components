<template>
  <el-menu-item v-if="!checkItemChildren(item)" :index="item.path">
    <i v-if="item.meta.icon" :class="item.meta.icon" />
    <span v-if="item.meta.title">{{ item.meta.title }}</span>
  </el-menu-item>
  <el-submenu v-else :index="item.path">
    <template v-if="item.meta" #title>
      <i v-if="item.meta.icon" :class="item.meta.icon" />
      <span v-if="item.meta.title">{{ item.meta.title }}</span>
    </template>
    <template v-for="child in item.children">
      <menu-item
        v-if="checkItemChildren(child)"
        :item="child"
        :key="child.path"
      />
      <el-menu-item
        v-else
        :to="child.path"
        :key="child.name"
        :index="child.path"
      >
        <i v-if="child.meta.icon" :class="child.meta.icon" />
        <span v-if="child.meta.title">{{ child.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ElMenuItem, ElSubmenu } from 'element-plus'

const { item } = defineProps<{ item: any }>()

function checkItemChildren(item) {
  return item.children ? item.children.length > 1 : false
}
</script>
