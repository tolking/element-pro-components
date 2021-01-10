<template>
  <el-radio-group
    :model-value="modelValue"
    class="pro-radio-button"
    @change="upData"
  >
    <el-radio-button
      v-for="item in data"
      :key="item[selectConfig.value]"
      :name="item[selectConfig.name]"
      :label="item[selectConfig.value]"
      :disabled="item[selectConfig.disabled]"
    >
      {{ item[selectConfig.label] }}
    </el-radio-button>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElRadioGroup, ElRadioButton } from 'element-plus'
import { selectMixin } from '../utils/mixins'

export default defineComponent({
  name: 'ProRadioButton',
  components: { ElRadioGroup, ElRadioButton },
  mixins: [selectMixin],
})
</script>
