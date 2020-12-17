<template>
  <aside :class="collapse && 'aside-collapse'" class="pro-aside el-aside">
    <div class="mask" @click="toggleCollapse"></div>
    <div class="pro-aside-wrapper">
      <div v-if="slots.logo" class="pro-aside-logo">
        <slot :collapse="collapse" name="logo" />
      </div>
      <el-scrollbar>
        <pro-menu :routers="routers" :collapse="collapse">
          <template v-if="slots.menu" #default="item">
            <slot v-bind="item" name="menu" />
          </template>
        </pro-menu>
      </el-scrollbar>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { toRefs, defineEmit, defineProps, useContext } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { ElScrollbar } from 'element-plus'
import ProMenu from '../Menu/index'

const props = defineProps<{
  collapse: boolean
  routers?: RouteRecordRaw[]
}>()
const {
  collapse,
  routers
} = toRefs(props)
const emit = defineEmit(['toggle-collapse'])
const { slots } = useContext()

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>

<style>
.pro-aside .mask {
  display: none;
}
.pro-aside .pro-aside-wrapper {
  position: relative;
  width: var(--aside-width);
  height: 100%;
  border-right: 1px solid var(--c-border);
  background: var(--c-aside-background);
  transition: width var(--t-duration) var(--t-timing-function);
}
.pro-aside.aside-collapse .pro-aside-wrapper {
  width: 60px;
}
.pro-aside .pro-aside-wrapper .el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
.pro-aside .pro-menu {
  min-height: calc(var(--layout-height) - var(--header-height));
}
.pro-aside .pro-aside-logo {
  padding-left: 20px;
  width: 100%;
  height: var(--header-height);
  border-bottom: 1px solid var(--c-border);
  background: var(--c-aside-background);
  box-sizing: border-box;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .pro-aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: var(--z-index-sidebar);
  }
  .pro-aside .mask {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
  }
  .pro-aside .pro-aside-wrapper {
    transform: translateX(0);
    transition: transform var(--t-duration) var(--t-timing-function);
  }
  .pro-aside.aside-collapse {
    width: 0;
    transition-duration: var(--t-duration);
  }
  .pro-aside.aside-collapse .mask {
    display: none;
  }
  .pro-aside.aside-collapse .pro-aside-wrapper {
    transform: translateX(-100%);
    transition: transform var(--t-duration) var(--t-timing-function);
  }
}
</style>
