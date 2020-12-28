<template>
  <div class="pro-input-tag">
    <el-tag
      v-for="(item, index) in value"
      :key="index"
      v-bind="tagConfig"
      closable
      @close="closeTag(item)"
    >
      {{ item }}
    </el-tag>
    <el-autocomplete
      v-if="autocomplete"
      v-model="input"
      v-bind="$attrs"
      @select="addTag"
      @keyup.space="addTag"
    >
      <slot />
    </el-autocomplete>
    <el-input
      v-else
      v-model="input"
      v-bind="$attrs"
      type="text"
      @blur="addTag"
      @keyup.space="addTag"
    >
      <slot />
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, defineEmit, defineProps, computed } from 'vue'
import { ElInput, ElTag, ElAutocomplete } from 'element-plus'

const props = defineProps<{
  modelValue?: string[]
  autocomplete?: boolean
  tag?: {
    type?: 'success' | 'info' | 'warning' | 'danger'
    size?: 'medium' | 'small' | 'mini'
    hit?: boolean
    effect: 'light' | 'dark' | 'plain'
  }
}>()
const { modelValue, autocomplete, tag } = toRefs(props)
const emit = defineEmit(['update:modelValue', 'change'])
const input = ref('')
const value = ref(modelValue?.value || [])
const tagConfig = computed(() => {
  return Object.assign({ effect: 'light' }, tag?.value)
})

function addTag() {
  if (input.value.trim()) {
    value.value.push(input.value.trim())
    emit('update:modelValue', value)
    emit('change', value)
    input.value = ''
  }
}
function closeTag(item: string) {
  value.value.splice(value.value.indexOf(item), 1)
  emit('update:modelValue', value)
  emit('change', value)
}
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
.pro-input-tag .el-input .el-input__inner {
  border: 0;
}
</style>
