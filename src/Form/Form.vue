<template>
  <el-form
    v-bind="attrs"
    ref="form"
    :label-position="position"
    :inline="inline"
    :style="!inline ? rowStyle : undefined"
    :class="!inline && rowClass"
    class="pro-form"
  >
    <pro-form-item
      v-for="item in columns"
      :key="item.prop"
      :model-value="modelValue"
      :item="item"
      :prop="item.prop"
      :inline="inline"
      @update:modelValue="upFormData"
    >
      <template
        v-for="slot in slotList"
        :key="slot.prop"
        #[slot.labelSlot]="scope"
      >
        <slot
          v-bind="scope"
          :name="slot.labelSlot"
        />
      </template>
      <template
        v-for="slot in slotList"
        :key="slot.prop"
        #[slot.errorSlot]="scope"
      >
        <slot
          v-bind="scope"
          :name="slot.errorSlot"
        />
      </template>
      <template
        v-for="slot in slotList"
        :key="slot.prop"
        #[slot.prop]="scope"
      >
        <slot
          v-bind="scope"
          :name="slot.prop"
        />
      </template>
    </pro-form-item>
    <slot />
    <el-form-item class="pro-form-menu">
      <slot name="menu-left" />
      <el-button
        v-if="menu.submit"
        v-bind="menu.submitProps"
        :loading="loading"
        @click="submitForm"
      >
        {{ menu.submitText }}
      </el-button>
      <el-button
        v-if="menu.reset"
        v-bind="menu.resetProps"
        :disabled="loading"
        @click="resetForm"
      >
        {{ menu.resetText }}
      </el-button>
      <slot name="menu-right" />
    </el-form-item>
  </el-form>
</template>

<script setup name="ProForm" lang="ts">
import { defineProps, toRefs, useContext, defineEmit, computed } from 'vue'
import { ElForm, ElFormItem, ElButton } from 'element-plus'
import ProFormItem from './FormItem.vue'
import {
  useFormSlotList,
  useFormMethods,
  useScreenSize,
  useFormMenu,
  useRow,
} from '../composables/index'
import type { FormColumn } from '../types/index'

const props = defineProps<{
  columns: Array<Record<string, unknown> & FormColumn>
  menu?: Record<string, unknown>
  modelValue: Record<string, unknown>
  labelPosition?: 'right' | 'left' | 'top'
  inline?: boolean
  gutter?: number
  type?: string
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  align?: 'top' | 'middle' | 'bottom'
}>()
const emit = defineEmit(['update:modelValue', 'submit', 'reset'])
const { attrs, expose } = useContext()
const { columns, modelValue, labelPosition, inline } = toRefs(props)
const slotList = useFormSlotList(columns)
const {
  form,
  loading,
  validate,
  resetFields,
  clearValidate,
  validateField,
  upFormData,
  submitForm,
  resetForm,
} = useFormMethods(emit)
const menu = useFormMenu(props)
const { rowStyle, rowClass } = useRow(props)
const size = useScreenSize()
const position = computed(() => {
  return size.value === 'xs' && !inline?.value ? 'top' : labelPosition?.value
})

expose({
  validate,
  resetFields,
  clearValidate,
  validateField,
})
</script>
