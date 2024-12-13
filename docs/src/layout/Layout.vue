<template>
  <pro-layout :routes="routes" transition="el-fade-in">
    <template #logo="{ collapse }">
      <transition name="el-zoom-in-top" mode="out-in">
        <img v-if="collapse" src="/logo.svg" alt="logo" class="logo-img" />
        <span v-else class="logo-title">element-pro-components</span>
      </transition>
    </template>
    <template #header-left>
      <pro-breadcrumb />
    </template>
    <template #header-right>
      <nav-header />
    </template>
    <template #header-bottom>
      <pro-tabs ref="tabs" contextmenu refresh-path="/dev/refresh" />
    </template>
  </pro-layout>
  <pwa-popup />
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { useSharedRoutes } from 'element-pro-components'
import { useLang } from '../composables/index'
import NavHeader from '../components/NavHeader.vue'
import PwaPopup from '../components/PwaPopup.vue'
import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

const sharedRoutes = useSharedRoutes()
const lang = useLang()
const tabs = ref<{ list: RouteLocationNormalizedLoaded[] }>({ list: [] })

const routesMap = computed(() => {
  const map: Record<string, RouteRecordRaw> = {}

  function setMap(list: RouteRecordRaw[]) {
    list.forEach((item) => {
      if (item.children) {
        setMap(item.children)
      } else {
        map[item.path] = item
      }
    })
  }

  setMap(sharedRoutes.value)
  return map
})
const routes = computed(() => {
  const reg = new RegExp(`^\\/(${lang.value}|dev)\\/`)
  return sharedRoutes.value.filter((item) => reg.test(item.path))
})

watch(lang, (value) => {
  tabs.value.list = tabs.value.list.map((item) => {
    const path = replaceUrl(item.path, value)
    const route = routesMap.value[path]

    return {
      ...item,
      path,
      fullPath: replaceUrl(item.fullPath, value),
      meta: route?.meta ?? {},
      name: route?.name,
    }
  })
})

provide('tabs', tabs)

function replaceUrl(url: string, lang: string) {
  if (url.startsWith('/dev/')) return url
  return url.replace(/^\/([\w|-]*)\//, `/${lang}/`)
}
</script>

<style scoped>
.logo-img {
  padding: 7px 10px;
  width: calc(var(--pro-layout-width-aside-collapse) - 20px);
}
.logo-title {
  line-height: var(--pro-layout-height-header);
}
</style>
