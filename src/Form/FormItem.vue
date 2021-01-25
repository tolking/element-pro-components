<template>
  <el-form-item
    v-bind="bindItem"
    :prop="prop"
    class="pro-form-item"
  >
    <template
      v-if="item.slot"
      #label
    >
      <slot
        :name="item.prop + '-label'"
        :item="item"
      />
    </template>
    <template
      v-if="item.slot"
      #error="scope"
    >
      <slot
        v-bind="scope"
        :name="item.prop + '-error'"
        :item="item"
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
            @click="add"
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
                :prop="`${prop}.${index}.${child.prop}`"
                @update:modelValue="(value) => upChildData(value, index)"
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
              </form-item>
            </div>
            <div class="children-form-control">
              <el-button
                icon="el-icon-minus"
                type="danger"
                circle
                @click="del(index)"
              />
              <el-button
                v-if="
                  (item.max ? index + 1 < item.max : true) &&
                    index + 1 === modelValue[item.prop].length
                "
                icon="el-icon-plus"
                type="primary"
                circle
                @click="add"
              />
            </div>
          </div>
        </template>
      </template>
      <template v-else-if="item.slot">
        <slot
          :name="item.prop"
          :item="item"
          :value="modelValue[item.prop]"
          :setValue="upData"
        >
          <pro-form-component
            :is="item.component"
            :model-value="modelValue[item.prop]"
            v-bind="item.props"
            @update:modelValue="upData"
          />
        </slot>
      </template>
      <template v-else>
        <pro-form-component
          :is="item.component"
          :model-value="modelValue[item.prop]"
          v-bind="item.props"
          @update:modelValue="upData"
        />
      </template>
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmit } from 'vue'
import { ElFormItem, ElButton } from 'element-plus'
import {
  useFormSlotList,
  useFormItemBind,
  useFormChild,
} from '../composables/index'
import ProFormComponent from './FormCompont.vue'
import type { ProColumns } from '../types/index'

type ModelChildValue = Record<string, Record<string, unknown>[]>

const props = defineProps<{
  item: Record<string, unknown> & { prop: string }
  prop: string
  modelValue: Record<string, unknown>
}>()
const emit = defineEmit(['update:modelValue'])
const { item, prop, modelValue } = toRefs(props)
const slotList = useFormSlotList(item.value.children as ProColumns)
const bindItem = useFormItemBind(item)
const { add, del, upChildData } = useFormChild(props, emit)

function upData(value: unknown) {
  const _model = { ...modelValue.value }
  _model[item.value.prop] = value
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
}
.pro-form-item .children-form .children-form-control .el-button {
  margin: 0 0 20px 10px;
}
</style>
