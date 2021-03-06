<template>
  <el-form-item
    v-bind="bindItem"
    :prop="hasChild ? undefined : prop"
    :style="!inline ? colStyle : undefined"
    :class="!inline && colClass"
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
      <template v-if="hasChild">
        <div
          v-for="(value, index) in modelValue[item.prop]"
          :key="index"
          class="children-form"
        >
          <div
            :class="!inline && 'el-row'"
            class="children-form-item"
          >
            <form-item
              v-for="child in item.children"
              :key="`${prop}.${index}.${child.prop}`"
              :model-value="value"
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
          <el-button
            icon="el-icon-minus"
            type="danger"
            circle
            class="delete-bth"
            @click="del(index)"
          />
        </div>
        <el-button
          v-if="showAddBtn"
          icon="el-icon-plus"
          type="primary"
          circle
          @click="add"
        />
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

<script lang="ts">
export default { name: 'ProFormItem' }
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { ElFormItem, ElButton } from 'element-plus'
import {
  useFormSlotList,
  useFormItemBind,
  useFormChild,
  useCol,
} from '../composables/index'
import ProFormComponent from './FormComponent'
import type { FormColumn, IFormColumns } from '../types/index'

const props = defineProps<{
  item: Record<string, unknown> & FormColumn
  prop: string
  modelValue: Record<string, unknown>
  inline?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const { item, prop, modelValue, inline } = toRefs(props)
const slotList = useFormSlotList(item.value.children as IFormColumns)
const bindItem = useFormItemBind(item)
const { hasChild, showAddBtn, add, del, upChildData } = useFormChild(
  props,
  emit
)
const { colStyle, colClass } = useCol(item)

function upData(value: unknown) {
  const _model = { ...modelValue.value }
  _model[item.value.prop] = value
  emit('update:modelValue', _model)
}
</script>
