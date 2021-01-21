<template>
  <el-checkbox-group
    :model-value="modelValue || []"
    class="pro-checkbox"
    @change="upData"
  >
    <el-checkbox
      v-for="item in data"
      :key="item[selectConfig.value]"
      :name="item[selectConfig.name]"
      :label="item[selectConfig.value]"
      :disabled="item[selectConfig.disabled]"
    >
      {{ item[selectConfig.label] }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import { select } from '../mixins/index'

export default defineComponent({
  name: 'ProCheckbox',
  components: { ElCheckboxGroup, ElCheckbox },
  mixins: [select],
})
</script>
