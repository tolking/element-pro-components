<template>
  <main class="pro-main">
    <router-view v-slot="{ Component, route }">
      <!-- <transition name="transition-main" mode="out-in"> -->
      <keep-alive v-if="route.meta?.keepAlive">
        <component
          :is="Component"
          :key="route.path"
        />
      </keep-alive>
      <component
        :is="Component"
        v-else
        :key="route.path"
      />
      <!-- </transition> -->
    </router-view>
  </main>
</template>

<script setup lang="ts">

</script>

<style>
.pro-main {
  margin: 10px;
  padding: 20px;
  border: 1px solid var(--c-border);
  border-radius: var(--border-radius);
  background: var(--c-aside-background);
}
@media screen and (max-width: 768px) {
  .pro-main {
    padding: 6px;
  }
}
</style>
