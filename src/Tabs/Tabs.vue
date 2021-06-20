<template>
  <el-tabs
    v-model="active"
    :closable="list.length > 1"
    class="pro-tabs"
    @tab-click="to"
    @tab-remove="close"
  >
    <el-tab-pane
      v-for="item in list"
      :key="item.path"
      :name="item.path"
      :label="item.title"
    />
  </el-tabs>
</template>

<script setup name="ProTabs" lang="ts">
import { useContext } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import { useTabs } from '../composables'

const { expose } = useContext()
const { active, list, to, close, closeOther } = useTabs()

expose({
  list,
  close,
  closeOther,
})
</script>
