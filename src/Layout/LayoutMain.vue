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
        <slot name="top" />
        <keep-alive v-if="route.meta?.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component
          :is="Component"
          v-else
        />
        <slot name="bottom" />
      </el-scrollbar>
    </transition>
  </router-view>
</template>

<script lang="ts">
export default { name: 'ProLayoutMain' }
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { ElScrollbar } from 'element-plus'

const props = defineProps<{ transition?: string }>()
const { transition } = toRefs(props)
</script>
