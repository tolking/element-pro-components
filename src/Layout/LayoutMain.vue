<template>
  <main class="pro-main el-main">
    <router-view v-slot="{ Component, route }">
      <!-- <transition name="transition-main" mode="out-in"> -->
        <keep-alive v-if="route.meta?.keepAlive">
          <component :is="Component" :key="route.path" />
        </keep-alive>
        <component v-else :is="Component" :key="route.path" />
      <!-- </transition> -->
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
