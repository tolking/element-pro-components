<template>
  <pro-layout>
    <template #header-left>
      <pro-breadcrumb />
    </template>
    <template #header-right>
      <nav-header />
    </template>
    <template #header-bottom>
      <pro-tabs />
    </template>
  </pro-layout>
  <teleport to="title">
    {{ title }}
  </teleport>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { isString } from '@vue/shared'
import NavHeader from '../components/NavHeader.vue'

const route = useRoute()
// const router = useRouter()
const title = computed(() => {
  return (route.meta.title || '') + ' | element-pro-components'
})
// const routes = computed(() => {
//   const _routes = router.options.routes
//   const _path = route.path.match(/^\/(.*)\//)
//   const _redirect = _path && _path[0] || ''
//   const ss = _routes.find(item => isString(item.redirect) && item.redirect.startsWith(_redirect))

//   return ss?.children || _routes
// })

// onMounted(() => {
//   console.log(navigator.language)
// })
</script>
