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
        <div
          v-for="(value, index) in testChildren"
          :key="index"
          class="children-form"
        >
          <div class="children-form-item">
            <form-item
              v-for="child in item.children"
              :key="child.prop"
              :item="child"
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
              @click="minusItem(index)"
            />
            <el-button
              v-if="index === testChildren.length - 1"
              icon="el-icon-plus"
              type="primary"
              circle
              @click="plusItem"
            />
          </div>
        </div>
        <el-button
          v-if="!testChildren.length"
          icon="el-icon-plus"
          type="primary"
          circle
          @click="plusItem"
        />
      </template>
      <template v-if="item.slot">
        <slot :name="item.prop" />
      </template>
      <template v-else>
        <component :is="item.component" />
      </template>
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs } from 'vue'
import { ElFormItem, ElButton } from 'element-plus'
import { useFormSlotList, useFormItemBind } from '../composables/index'
import type { ProColumns } from '../types/index'

const props = defineProps<{
  item: Record<string, unknown>
}>()
const { item } = toRefs(props)
const slotList = useFormSlotList(item.value.children as ProColumns)
const bindItem = useFormItemBind(item)

const testChildren = ref([{}]) // TODO: bind form `model`

function plusItem() {
  testChildren.value.push({})
}
function minusItem(index: number) {
  testChildren.value.splice(index, 1)
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
}
</style>
