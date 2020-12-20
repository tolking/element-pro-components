<template>
  <el-tabs
    v-model="active"
    :closable="tabsList.length > 1"
    class="pro-tabs"
    @tab-click="toTab"
    @tab-remove="closeTab"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :name="item.path"
      :label="item.title"
    />
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElTabs, ElTabPane } from 'element-plus'
import type { ProRouteRecordRaw } from '../types/index'

interface ProTabs {
  title: string
  path: string
}

const route = useRoute()
const router = useRouter()
const active = ref('')
const tabsList = ref<ProTabs[]>([])

watch(
  () => route.path,
  (path) => {
    const title = route.meta.title
    addTab({ title, path })
  },
  { immediate: true }
)

function addTab(tab: ProTabs) {
  !tabsList.value.find((item) => item.path === tab.path) &&
    tabsList.value.push(tab)
  active.value = tab.path
}

function toTab(item: { paneName: string }) {
  if (item.paneName !== route.path) {
    router.push(item.paneName)
  }
}

function closeTab(path: string) {
  const index = tabsList.value.findIndex((item) => item.path === path)
  tabsList.value = tabsList.value.filter((item) => item.path !== path)

  if (route.path === path && tabsList.value.length) {
    if (index >= 1) {
      toTab({ paneName: tabsList.value[index - 1].path })
    } else {
      toTab({ paneName: tabsList.value[index].path })
    }
  }
}
</script>

<style>
.pro-tabs {
  padding: 0 20px;
  background: var(--c-tabs-background);
}
.pro-tabs .el-tabs__header {
  margin: 0;
}
</style>
