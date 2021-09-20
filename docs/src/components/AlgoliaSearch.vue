<template>
  <div ref="search" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import docsearch from '@docsearch/js'
import '@docsearch/css'

const search = ref()

onMounted(initialize)

function initialize() {
  docsearch({
    apiKey: 'a6ea2182ffda25f1f17c2e3ecfb640ea',
    indexName: 'element-pro-components',
    container: search.value,
    debug: false,
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
  --docsearch-searchbox-background: var(--el-background-color-base);
  --docsearch-modal-shadow: var(--el-box-shadow-base);
}
</style>
