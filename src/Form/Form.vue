<template>
  <el-form
    v-bind="attrs"
    :model="modelValue"
    class="pro-form"
  >
    <pro-form-item
      v-for="item in columns"
      :key="item.prop"
      :model-value="modelValue"
      :item="item"
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
      <slot name="menu" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps, toRefs, useContext, defineEmit } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import { useFormSlotList } from '../composables/index'
import ProFormItem from './FormItem.vue'

const props = defineProps<{
  columns: Record<string, unknown>[]
  modelValue: Record<string, unknown>
}>()
const emit = defineEmit(['update:modelValue'])
const { attrs } = useContext()
const { columns, modelValue } = toRefs(props)
const slotList = useFormSlotList(columns)

function upData(value: unknown) {
  emit('update:modelValue', value)
}
</script>
