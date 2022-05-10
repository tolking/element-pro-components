<template>
  <div ref="search" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import docsearch from '@docsearch/js'
import { algolia } from '../utils/index'
import '@docsearch/css'

const search = ref()

onMounted(initialize)

function initialize() {
  docsearch({
    ...algolia,
    container: search.value,
  })
}
</script>

<style>
.DocSearch {
  --docsearch-primary-color: var(--el-color-primary);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);
  --docsearch-text-color: var(--el-text-color-primary);
  --docsearch-muted-color: var(--el-text-color-primary);
  --docsearch-searchbox-background: var(--el-fill-color-light);
  --docsearch-modal-shadow: var(--el-box-shadow);
  --docsearch-searchbox-focus-background: var(--el-fill-color);
  --docsearch-key-gradient: var(--el-bg-color-page);
  --docsearch-container-background: var(--el-mask-color);
  --docsearch-modal-background: var(--el-bg-color);
  --docsearch-footer-background: var(--el-bg-color-page);
  --docsearch-footer-shadow: var(--el-box-shadow);
}
</style>
