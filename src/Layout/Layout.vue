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
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs, useContext } from 'vue'
import { ElContainer, ElScrollbar } from 'element-plus'
import ProLayoutAside from './LayoutAside.vue'
import ProLayoutHeader from './LayoutHeader.vue'
import ProLayoutMain from './LayoutMain.vue'
import { useShow } from '../composables/index'
import type { ProRouteRecordRaw } from '../types/index'

const props = defineProps<{ routes?: ProRouteRecordRaw[] }>()
const { routes } = toRefs(props)
const { slots } = useContext()
const { show, toggleShow } = useShow()
</script>

<style>
.pro-layout {
  position: relative;
  height: var(--layout-height);
}
.pro-layout .pro-container,
.pro-layout .pro-layout-wrapper {
  flex: 1;
}
.pro-layout .pro-container {
  background: var(--c-page-background);
}
.pro-layout .pro-layout-wrapper.el-scrollbar .el-scrollbar__wrap {
  margin-bottom: 0 !important;
  overflow-x: hidden;
}
@media screen and (max-width: 768px) {
  .pro-layout .pro-layout-wrapper.el-scrollbar .el-scrollbar__wrap {
    margin-right: 0 !important;
  }
}
</style>
