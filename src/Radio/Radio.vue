<template>
  <el-radio-group
    :model-value="modelValue"
    class="pro-radio"
    @change="upData"
  >
    <el-radio
      v-for="item in data"
      :key="item[selectConfig.value]"
      :name="item[selectConfig.name]"
      :label="item[selectConfig.value]"
      :disabled="item[selectConfig.disabled]"
    >
      {{ item[selectConfig.label] }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElRadioGroup, ElRadio } from 'element-plus'
import { selectMixin } from '../utils/mixins'

export default defineComponent({
  name: 'ProRadio',
  components: { ElRadioGroup, ElRadio },
  mixins: [selectMixin],
})
</script>
