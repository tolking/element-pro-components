<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="transition"
      mode="out-in"
    >
      <el-scrollbar
        :key="route.path"
        class="pro-main"
      >
        <keep-alive v-if="route.meta?.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component
          :is="Component"
          v-else
        />
      </el-scrollbar>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { ElScrollbar } from 'element-plus'

const props = defineProps<{ transition?: string }>()
const { transition } = toRefs(props)
</script>

<style>
.pro-main {
  margin: 10px;
  padding: 20px;
  border: 1px solid var(--c-border);
  border-radius: var(--border-radius);
  background: var(--c-aside-background);
}
.pro-main.el-scrollbar .el-scrollbar__wrap {
  margin-bottom: 0 !important;
  overflow-x: hidden;
}
@media screen and (max-width: 768px) {
  .pro-main {
    padding: 6px;
  }
  .pro-main.el-scrollbar .el-scrollbar__wrap {
    margin-right: 0 !important;
  }
}
</style>
