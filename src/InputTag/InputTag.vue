<template>
  <div class="pro-input-tag">
    <el-tag
      v-for="(item, index) in modelValue"
      v-bind="tagConfig"
      :key="index"
      :size="size"
      closable
      @close="close(index)"
    >
      {{ item }}
    </el-tag>
    <el-autocomplete
      v-if="autocomplete"
      v-model="input"
      v-bind="attrs"
      :size="size"
      @select="add"
      @keyup.space="add"
    />
    <el-input
      v-else
      v-model="input"
      v-bind="attrs"
      :size="size"
      type="text"
      @blur="add"
      @keyup.space="add"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs, defineEmit, defineProps, computed, useContext } from 'vue'
import { ElInput, ElTag, ElAutocomplete } from 'element-plus'
import { useInputTag, useFormSize } from '../composables/index'

const props = defineProps<{
  modelValue?: string[]
  autocomplete: boolean
  size?: 'medium' | 'small' | 'mini'
  tag?: {
    type?: 'success' | 'info' | 'warning' | 'danger'
    hit?: boolean
    color?: string
    effect: 'light' | 'dark' | 'plain'
  }
}>()
const emit = defineEmit(['update:modelValue'])
const { modelValue, autocomplete, tag } = toRefs(props)
const { attrs } = useContext()
const size = useFormSize(props)
const { input, add, close } = useInputTag(emit, modelValue)
const tagConfig = computed(() => {
  return Object.assign({ effect: 'light' }, tag?.value)
})
</script>

<style>
.pro-input-tag {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  background-color: var(--c-background);
}
.pro-input-tag .el-tag {
  margin: 3px;
}
.pro-input-tag .el-input,
.pro-input-tag .el-autocomplete {
  flex: 1;
  min-width: 80px;
}
.pro-input-tag .el-input .el-input__inner {
  border: 0;
}
</style>
