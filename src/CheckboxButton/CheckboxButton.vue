<template>
  <el-checkbox-group
    :model-value="modelValue || []"
    class="pro-checkbox-button"
    @change="upData"
  >
    <el-checkbox-button
      v-for="item in data"
      :key="item[selectConfig.value]"
      :name="item[selectConfig.name]"
      :label="item[selectConfig.value]"
      :disabled="item[selectConfig.disabled]"
    >
      {{ item[selectConfig.label] }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElCheckboxGroup, ElCheckboxButton } from 'element-plus'
import { select } from '../mixins/index'

export default defineComponent({
  name: 'ProCheckboxButton',
  components: { ElCheckboxGroup, ElCheckboxButton },
  mixins: [select],
})
</script>
