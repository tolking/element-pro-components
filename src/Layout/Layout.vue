<template>
  <el-container class="pro-layout">
    <pro-layout-aside :routes="routes" :collapse="show" @toggle-collapse="toggleShow">
      <template v-if="slots.logo" #logo="{ collapse }">
        <slot :collapse="collapse" name="logo" />
      </template>
      <template v-if="slots.menu" #menu="item">
        <slot v-bind="item" name="menu" />
      </template>
    </pro-layout-aside>
    <el-container class="pro-container is-vertical">
      <pro-layout-header @toggle-collapse="toggleShow">
        <template #left>
          <slot name="left-header" />
        </template>
        <template #right>
          <slot name="right-header" />
        </template>
      </pro-layout-header>
      <el-scrollbar class="pro-layout-wrapper">
        <pro-layout-main />
        <pro-layout-footer v-if="!hiddenFooter">
          <slot name="footer" />
        </pro-layout-footer>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs, useContext } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { ElContainer, ElScrollbar } from 'element-plus'
import ProLayoutAside from './LayoutAside.vue'
import ProLayoutHeader from './LayoutHeader.vue'
import ProLayoutMain from './LayoutMain.vue'
import ProLayoutFooter from './LayoutFooter.vue'
import { useShow } from '../composables/index'

const props = defineProps<{
  hiddenFooter?: boolean
  routes?: RouteRecordRaw[]
}>()
const { hiddenFooter, routes } = toRefs(props)
const { show, toggleShow } = useShow()
const { slots } = useContext()
</script>

<style>
.pro-layout {
  position: relative;
  height: var(--layout-height);
}
.pro-layout .pro-layout-wrapper.el-scrollbar .el-scrollbar__wrap {
  margin-bottom: 0 !important;
  overflow-x: hidden;
}
</style>
