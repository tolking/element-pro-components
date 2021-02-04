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

<style lang="postcss">
.pro-main {
  margin: var(--main-margin);
  padding: var(--main-padding);
  border: 1px solid var(--c-border);
  border-radius: var(--border-radius);
  background: var(--c-aside-background);
  &.el-scrollbar .el-scrollbar__wrap {
    margin-bottom: 0 !important;
    overflow-x: hidden;
  }
  @media (--xs-medium) {
    margin: var(--xs-main-margin);
    padding: var(--xs-main-padding);
    &.el-scrollbar .el-scrollbar__wrap {
      margin-right: 0 !important;
    }
  }
}
</style>
