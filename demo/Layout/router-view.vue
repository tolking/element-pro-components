<template>
  <pro-layout class="docs-layout">
    <router-view>
      <template #default="{ Component, route }">
        <transition name="el-fade-in" mode="out-in" appear>
          <pro-card :key="route.fullPath" shadow="never">
            <component :is="Component" />
          </pro-card>
        </transition>
      </template>
    </router-view>
  </pro-layout>
</template>
