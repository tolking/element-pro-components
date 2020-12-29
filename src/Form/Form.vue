<template>
  <el-form class="pro-form">
    <pro-form-item
      v-for="item in columns"
      :key="item.prop"
      :item="item"
    >
      <template
        v-for="slot in slotList"
        :key="slot.prop"
        #[slot.labelSlot]
      >
        <slot :name="slot.labelSlot" />
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
        #[slot.prop]
      >
        <slot :name="slot.prop" />
      </template>
    </pro-form-item>
    <slot />
    <el-form-item>
      <slot name="menu" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ElForm, ElFormItem } from 'element-plus'
import { defineProps, toRefs } from 'vue'
import { useFormSlotList } from '../composables/index'
import ProFormItem from './FormItem.vue'

const props = defineProps<{
  columns: Record<string, unknown>[]
}>()
const { columns } = toRefs(props)
const slotList = useFormSlotList(columns)
</script>
