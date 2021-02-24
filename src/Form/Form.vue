<template>
  <el-form
    v-bind="attrs"
    ref="form"
    :model="modelValue"
    :label-position="position"
    class="pro-form"
  >
    <pro-form-item
      v-for="item in columns"
      :key="item.prop"
      :model-value="modelValue"
      :item="item"
      :prop="item.prop"
      @update:modelValue="upData"
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
    <el-form-item>
      <slot name="menu-left" />
      <el-button
        v-if="menu.submit"
        v-bind="menu.submitProps"
        @click="submitForm"
      >
        {{ menu.submitText }}
      </el-button>
      <el-button
        v-if="menu.reset"
        v-bind="menu.resetProps"
        @click="resetForm"
      >
        {{ menu.resetText }}
      </el-button>
      <slot name="menu-right" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps, toRefs, useContext, defineEmit, computed } from 'vue'
import { ElForm, ElFormItem, ElButton } from 'element-plus'
import ProFormItem from './FormItem.vue'
import {
  useFormSlotList,
  useFormMethods,
  useScreenSize,
  useFormMenu,
} from '../composables/index'
import type { ProFormColumn } from '../types/index'

const props = defineProps<{
  columns: Array<Record<string, unknown> & ProFormColumn>
  menu?: Record<string, unknown>
  modelValue: Record<string, unknown>
  labelPosition?: 'right' | 'left' | 'top'
}>()
const emit = defineEmit(['update:modelValue', 'submit', 'reset'])
const { attrs, expose } = useContext()
const { columns, modelValue, labelPosition } = toRefs(props)
const slotList = useFormSlotList(columns)
const {
  form,
  validate,
  resetFields,
  clearValidate,
  validateField,
  submitForm,
  resetForm,
} = useFormMethods(emit, upData)
const menu = useFormMenu(props)
const size = useScreenSize()
const position = computed(() => {
  return size.value === 'xs' && !attrs.inline ? 'top' : labelPosition?.value
})

function upData(value: unknown) {
  emit('update:modelValue', value)
}

expose({
  validate,
  resetFields,
  clearValidate,
  validateField,
})
</script>
