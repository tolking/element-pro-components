<template>
  <div class="pro-input-tag">
    <el-tag
      v-for="(item, index) in modelValue"
      :key="index"
      v-bind="tagConfig"
      closable
      @close="close(index)"
    >
      {{ item }}
    </el-tag>
    <el-autocomplete
      v-if="autocomplete"
      v-model="input"
      v-bind="attrs"
      @select="add"
      @keyup.space="add"
    >
      <slot />
    </el-autocomplete>
    <el-input
      v-else
      v-model="input"
      v-bind="attrs"
      type="text"
      @blur="add"
      @keyup.space="add"
    >
      <slot />
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, defineEmit, defineProps, computed, useContext } from 'vue'
import { ElInput, ElTag, ElAutocomplete } from 'element-plus'
import { useInputTag } from '../composables/index'

const props = defineProps<{
  modelValue?: string[]
  autocomplete: boolean
  tag?: {
    type?: 'success' | 'info' | 'warning' | 'danger'
    size?: 'medium' | 'small' | 'mini'
    hit?: boolean
    color?: string
    effect: 'light' | 'dark' | 'plain'
  }
}>()
const emit = defineEmit(['update:modelValue'])
const { modelValue, autocomplete, tag } = toRefs(props)
const { attrs } = useContext()
const { input, add, close } = useInputTag(emit, modelValue)
const tagConfig = computed(() => {
  return Object.assign({ effect: 'light' }, tag?.value)
})
</script>

<style>
.pro-input-tag {
  display: flex;
  flex-wrap: wrap;
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
}
.pro-input-tag .el-input {
  height: 100%;
}
.pro-input-tag .el-input .el-input__inner {
  height: 100%;
  min-height: 32px;
  border: 0;
}
</style>
