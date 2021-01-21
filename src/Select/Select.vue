<template>
  <el-select
    :model-value="modelValue"
    class="pro-select"
    @change="upData"
  >
    <el-option
      v-for="item in data"
      :key="item[selectConfig.value]"
      :value="item[selectConfig.value]"
      :label="item[selectConfig.label]"
      :disabled="item[selectConfig.disabled]"
    />
  </el-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import { select } from '../mixins/index'

export default defineComponent({
  name: 'ProSelect',
  components: { ElSelect, ElOption },
  mixins: [select],
})
</script>
