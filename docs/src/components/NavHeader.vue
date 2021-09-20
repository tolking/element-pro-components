<template>
  <el-dropdown
    v-if="showLangButton"
    class="header-icon"
  >
    <svg
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
        >
          <pro-link
            :to="setUrl(item.key)"
            class="lang-link"
          >
            {{ item.value }}
          </pro-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <pro-link
    to="https://github.com/tolking/element-pro-components"
    class="header-icon"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  </pro-link>
  <algolia-search />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { langs } from '../utils/index'
import AlgoliaSearch from './AlgoliaSearch.vue'

const route = useRoute()
const showLangButton = computed(() => {
  return !route.path.startsWith('/dev/')
})

function setUrl(key: string) {
  return route.path.replace(/^\/([\w|-]*)\//, `/${key}/`)
}
</script>

<style>
.header-icon:not(:first-child) {
  margin-left: 14px;
}
.header-icon svg {
  width: 28px;
  height: 28px;
  fill: var(--el-text-color-primary);
}
.pro-link.lang-link {
  color: var(--el-text-color-primary);
}
.pro-link.lang-link:hover,
.pro-link.lang-link.router-link-exact-active {
  color: var(--el-color-primary);
}
</style>
