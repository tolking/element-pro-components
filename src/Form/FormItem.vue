<template>
  <el-form-item
    v-bind="bindItem"
    class="pro-form-item"
  >
    <template
      v-if="item.slot"
      #label
    >
      <slot :name="item.prop + '-label'" />
    </template>
    <template
      v-if="item.slot"
      #error="scope"
    >
      <slot
        v-bind="scope"
        :name="item.prop + '-error'"
      />
    </template>
    <template #default>
      <template v-if="item.children && item.children.length">
        <template
          v-if="!modelValue[item.prop] || !modelValue[item.prop].length"
        >
          <el-button
            icon="el-icon-plus"
            type="primary"
            circle
            @click="plusItem(item.prop)"
          />
        </template>
        <template v-else>
          <div
            v-for="(value, index) in modelValue[item.prop]"
            :key="index"
            class="children-form"
          >
            <div class="children-form-item">
              <form-item
                v-for="child in item.children"
                :key="child.prop"
                :model-value="modelValue[item.prop][index]"
                :item="child"
                @update:modelValue="
                  (value) => upChildData(item.prop, index, value)
                "
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
              </form-item>
            </div>
            <div class="children-form-control">
              <el-button
                icon="el-icon-minus"
                type="danger"
                circle
                @click="minusItem(item.prop, index)"
              />
              <el-button
                v-if="
                  (item.max ? index + 1 < item.max : true) &&
                    index + 1 === modelValue[item.prop].length
                "
                icon="el-icon-plus"
                type="primary"
                circle
                @click="plusItem(item.prop)"
              />
            </div>
          </div>
        </template>
      </template>
      <template v-else-if="item.slot">
        <slot :name="item.prop">
          <pro-form-component
            :is="item.component"
            :model-value="modelValue[item.prop]"
            v-bind="item.props"
            @update:modelValue="(value) => upData(item.prop, value)"
          />
        </slot>
      </template>
      <template v-else>
        <pro-form-component
          :is="item.component"
          :model-value="modelValue[item.prop]"
          v-bind="item.props"
          @update:modelValue="(value) => upData(item.prop, value)"
        />
      </template>
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs, defineEmit, computed } from 'vue'
import { ElFormItem, ElButton } from 'element-plus'
import { useFormSlotList, useFormItemBind } from '../composables/index'
import ProFormComponent from './FormCompont.vue'
import type { ProColumns } from '../types/index'

type ModelChildValue = Record<string, Record<string, unknown>[]>

const props = defineProps<{
  item: Record<string, unknown>
  modelValue: Record<string, unknown>
}>()
const emit = defineEmit(['update:modelValue'])
const { item, modelValue } = toRefs(props)
const slotList = useFormSlotList(item.value.children as ProColumns)
const bindItem = useFormItemBind(item)

function plusItem(key: string) {
  const _model = { ...modelValue.value } as ModelChildValue
  if (modelValue.value[key]) {
    _model[key].push({})
  } else {
    _model[key] = [{}]
  }
  emit('update:modelValue', _model)
}
function minusItem(key: string, index: number) {
  const _model = { ...modelValue.value } as ModelChildValue
  _model[key].splice(index, 1)
  emit('update:modelValue', _model)
}

function upData(key: string, value: unknown) {
  const _model = { ...modelValue.value }
  _model[key] = value
  emit('update:modelValue', _model)
}
function upChildData(
  key: string,
  index: number,
  value: Record<string, unknown>
) {
  const _model = { ...modelValue.value } as ModelChildValue
  _model[key][index] = value
  emit('update:modelValue', _model)
}
</script>

<style>
.pro-form-item .children-form {
  display: flex;
  justify-content: space-between;
}
.pro-form-item .children-form .children-form-item {
  flex: 1;
}
.pro-form-item .children-form .children-form-item .pro-form-item {
  margin-bottom: 22px;
}
.pro-form-item .children-form .children-form-control {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50px;
}
.pro-form-item .children-form .children-form-control .el-button {
  margin: 0 0 20px 0;
  padding: 10px;
}
</style>
