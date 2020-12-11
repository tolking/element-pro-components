<template>
  <el-container class="pro-layout">
    <aside :class="show && 'aside-collapse'" class="pro-aside el-aside">
      <div class="mask" @click="toggenShow"></div>
      <div class="pro-aside-wrapper">
        <el-scrollbar>
          <template v-if="$slots.asideTop">
            <slot name="asideTop" />
          </template>
          <pro-menu :routers="routers" :collapse="show" />
          <template v-if="$slots.asideBottom">
            <slot name="asideBottom" />
          </template>
        </el-scrollbar>
      </div>
    </aside>
    <el-container class="pro-container">
      <el-header class="pro-header">
        <div class="header-slot">
          <span class="header-fold-btn" @click="toggenShow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/>
            </svg>
          </span>
          <template v-if="$slots.headerLeft">
            <slot name="headerLeft" />
          </template>
        </div>
        <div class="header-slot">
          <template v-if="$slots.headerRight">
            <slot name="headerRight" />
          </template>
        </div>
      </el-header>
      <el-container class="pro-main">
        <el-scrollbar>
          <main class="el-main">
            <router-view v-slot="{ Component, route  }">
              <transition name="transition-main" mode="out-in">
                <component v-if="!route.meta.keepAlive" :is="Component" :key="route.path" />
                <keep-alive v-else>
                  <component :is="Component" :key="route.path" />
                </keep-alive>
              </transition>
            </router-view>
          </main>
          <footer v-if="!hiddenFooter" class="pro-footer el-footer">
            <template v-if="$slots.footer">
              <slot name="footer" />
            </template>
            <template v-else>
              <a
                href="https://tolking.github.io/element-pro-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                element-pro-components
              </a>
            </template>
          </footer>
        <el-scrollbar>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { ElContainer, ElScrollbar, ElHeader } from 'element-plus'
import ProMenu from '../ProMenu/index'
import { useShow } from '../composables/index'

const props = defineProps<{
  hiddenFooter?: boolean
  routers?: RouteRecordRaw[]
}>()
const {
  hiddenFooter,
  routers
} = toRefs(props)
const { show, toggenShow } = useShow()
</script>

<style>
.pro-layout {
  height: var(--layout-height);
}
.pro-layout .pro-aside .mask {
  display: none;
}
.pro-layout .pro-aside .pro-aside-wrapper {
  position: relative;
  width: var(--aside-width);
  height: 100%;
  border-right: 1px solid var(--c-border);
  background: var(--c-background);
  transition: width .3s ease-out;
}
.pro-layout .pro-aside.aside-collapse .pro-aside-wrapper {
  width: 60px;
}
.pro-layout .pro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  border-bottom: 1px solid var(--c-border);
}
.pro-layout .pro-header .header-slot {
  display: flex;
  align-items: center;
}
.pro-layout .header-fold-btn {
  display: inline-block;
  margin-right: 10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}
.pro-layout .pro-main .el-scrollbar {
  width: 100%;
}
.pro-layout .pro-main .el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
.pro-layout .pro-main .el-main {
  min-height: calc(var(--layout-height) - var(--header-height) - var(--footer-height));
}
.pro-layout .pro-footer {
  height: var(--footer-height);
  line-height: var(--footer-height);
  text-align: center;
}
@media screen and (max-width: 768px) {
  .pro-layout {
    position: relative;
  }
  .pro-layout .pro-aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: var(--z-index-sidebar);
  }
  .pro-layout .pro-aside .mask {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
  }
  .pro-layout .pro-aside .pro-aside-wrapper {
    transform: translateX(0);
    transition: transform .3s ease-out;
  }
  .pro-layout .pro-aside.aside-collapse {
    width: 0;
    transition-duration: .3s;
  }
  .pro-layout .pro-aside.aside-collapse .mask {
    display: none;
  }
  .pro-layout .pro-aside.aside-collapse .pro-aside-wrapper {
    transform: translateX(-100%);
    transition: transform .3s ease-out;
  }
}
</style>
