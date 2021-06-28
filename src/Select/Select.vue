<template>
  <el-select
    v-model="modelValue"
    class="pro-select"
  >
    <template
      v-for="item in data"
      :key="item.value"
    >
      <el-option-group
        v-if="item.children && item.children.length"
        :key="item.label"
        :label="item.label"
      >
        <el-option
          v-for="cItem in item.children"
          :key="cItem.value"
          :label="cItem.label"
          :value="cItem.value"
          :disabled="cItem.disabled"
        />
      </el-option-group>
      <el-option
        v-else
        :value="item.value"
        :label="item.label"
        :disabled="item.disabled"
      />
    </template>
  </el-select>
</template>

<script setup name="ProSelect" lang="ts">
import { defineEmit, defineProps } from 'vue'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'
import { useVModel, useSelectData } from '../composables/index'
import type { MaybeArray, UnknownObject, StringObject } from '../types/index'

const props = defineProps<{
  modelValue?:
    | string
    | number
    | boolean
    | Record<string, unknown>
    | Array<string | number | boolean | Record<string, unknown>>
  data: Record<string, boolean | string | number | UnknownObject>[]
  config?: {
    value?: string
    label?: string
    disabled?: string
    children?: string
  }
}>()
const emit = defineEmit(['update:modelValue'])
const modelValue = useVModel<
  MaybeArray<string | number | boolean | StringObject>
>(props)
const data = useSelectData(props)
</script>
