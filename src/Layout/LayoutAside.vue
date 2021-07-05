<template>
  <aside
    :class="collapse && 'aside-collapse'"
    class="pro-aside"
  >
    <div
      class="mask"
      @click="toggleCollapse"
    />
    <div class="pro-aside-wrapper">
      <div
        v-if="slots.logo"
        class="pro-aside-logo"
      >
        <slot
          :collapse="menuCollapse"
          name="logo"
        />
      </div>
      <el-scrollbar>
        <pro-menu
          v-bind="attrs"
          :collapse="menuCollapse"
        >
          <template
            v-if="slots.menu"
            #default="item"
          >
            <slot
              v-bind="item"
              name="menu"
            />
          </template>
        </pro-menu>
      </el-scrollbar>
    </div>
  </aside>
</template>

<script lang="ts">
export default { name: 'ProLayoutAside' }
</script>

<script setup name="ProLayoutAside" lang="ts">
import { toRefs, computed, useSlots } from 'vue'
import { ElScrollbar } from 'element-plus'
import { useAttrs, useScreenSize } from '../composables/index'
import ProMenu from '../Menu/index'

const props = defineProps<{ collapse: boolean }>()
const { collapse } = toRefs(props)
const emit = defineEmits(['toggle-collapse'])
const slots = useSlots()
const attrs = useAttrs()
const size = useScreenSize()
const menuCollapse = computed(() => {
  return size.value === 'xs' ? false : collapse.value
})

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>
