<template>
  <main class="pro-main el-main">
    <router-view v-slot="{ Component, route }">
      <transition name="transition-main" mode="out-in">
        <component v-if="!route.meta.keepAlive" :is="Component" :key="route.path" />
        <keep-alive v-else>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">

</script>

<style>
.pro-main {
  min-height: calc(var(--layout-height) - var(--header-height) - var(--footer-height));
}
</style>
