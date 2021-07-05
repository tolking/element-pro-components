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

<script lang="ts">
export default { name: 'ProTabs' }
</script>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { useTabs } from '../composables'

const { active, list, to, close, closeOther } = useTabs()

defineExpose({
  list,
  close,
  closeOther,
})
</script>
