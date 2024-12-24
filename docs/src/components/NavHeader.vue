<template>
  <button
    ref="themeRef"
    :aria-label="t('docs.header.theme')"
    class="header-icon"
    @click="toggleAppearance()"
  >
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"
      />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
      />
    </svg>
  </button>
  <el-dropdown v-if="showLangButton" class="header-icon" @command="handleLangs">
    <svg
      :aria-label="t('docs.header.lang')"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <path
        d="M651.296 390.048h325.216c25.888 0.64 46.624 21.76 46.624 47.744v1.216-0.064 537.312c0 25.984-20.736 47.104-46.592 47.744H419.264a47.776 47.776 0 0 1-46.624-47.744v-1.216 0.064-341.152H46.848a47.776 47.776 0 0 1-46.624-47.744v-1.216 0.064V48.896v-1.152C0.224 21.76 20.96 0.64 46.816 0h557.824c25.888 0.64 46.624 21.76 46.624 47.744v1.216-0.064zM46.912 585.056h557.76V48.896H46.912v536.16z m635.648-16.48l-102.336 278.592h45.472l25.024-71.648h113.728l25.024 71.648h43.776l-102.912-278.592z m-22.176 170.56l44.352-126.208 47.2 126.208zM306.176 113.728h35.264v71.072h135.328v188.192h-35.264v-22.176H341.44v130.784H307.904v-130.784H210.688v22.176H175.424V184.8h132.48zM210.656 314.432h96.672V221.184H210.656z m130.784 0h100.064V221.184H341.44z"
      />
    </svg>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langs"
          :key="item.key"
          :command="item.key"
          :style="{ color: item.key === lang ? 'var(--el-color-primary)' : '' }"
        >
          {{ item.value }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <pro-link
    :aria-label="t('docs.header.github')"
    to="https://github.com/tolking/element-pro-components"
    class="header-icon"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  </pro-link>
  <algolia-search />
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { useLocale } from 'element-pro-components'
import { useLang } from '../composables/index'
import { langs } from '../utils/index'
import AlgoliaSearch from './AlgoliaSearch.vue'

const route = useRoute()
const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const lang = useLang()
const { t } = useLocale()

const themeRef = ref<HTMLButtonElement>()

const showLangButton = computed(() => {
  return !route.path.startsWith('/dev/')
})

function handleLangs(key: string) {
  if (key === lang.value) return
  const url = route.path.replace(/^\/([\w|-]*)\//, `/${key}/`)
  router.replace(url)
}

function toggleAppearance() {
  const isAppearanceTransition =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition) {
    toggleDark()
    return
  }

  const rect = themeRef.value!.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2

  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const transition = document.startViewTransition(async () => {
    toggleDark()
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in-out',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<style scoped>
.header-icon {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
.header-icon:not(:first-child) {
  margin-left: 16px;
}
.header-icon svg {
  width: 28px;
  height: 28px;
  fill: var(--el-text-color-primary);
  transition: var(--el-transition-all);
}
.header-icon:hover svg {
  fill: var(--el-text-color-secondary);
}
</style>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}
::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 999999999;
}
</style>
