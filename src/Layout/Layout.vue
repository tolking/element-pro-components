<template>
  <section class="pro-layout">
    <pro-layout-aside
      v-bind="attrs"
      :collapse="show"
      @toggle-collapse="toggleShow"
    >
      <template
        v-if="slots.logo"
        #logo="{ collapse }"
      >
        <slot
          :collapse="collapse"
          name="logo"
        />
      </template>
      <template
        v-if="slots.menu"
        #menu="item"
      >
        <slot
          v-bind="item"
          name="menu"
        />
      </template>
    </pro-layout-aside>
    <section class="pro-container">
      <pro-layout-header
        :collapse="show"
        @toggle-collapse="toggleShow"
      >
        <template #left>
          <slot name="header-left" />
        </template>
        <template #right>
          <slot name="header-right" />
        </template>
      </pro-layout-header>
      <slot name="header-bottom" />
      <pro-layout-main :transition="transition">
        <template #top>
          <slot name="main-top" />
        </template>
        <template #bottom>
          <slot name="main-bottom" />
        </template>
      </pro-layout-main>
      <slot name="footer" />
    </section>
  </section>
</template>

<script lang="ts">
export default { name: 'ProLayout' }
</script>

<script setup lang="ts">
import { toRefs, useSlots } from 'vue'
import ProLayoutAside from './LayoutAside.vue'
import ProLayoutHeader from './LayoutHeader.vue'
import ProLayoutMain from './LayoutMain.vue'
import { useAttrs, useShow } from '../composables/index'

const props = defineProps<{
  collapse?: boolean
  transition?: string
}>()
const { collapse, transition } = toRefs(props)
const slots = useSlots()
const attrs = useAttrs()
const { show, toggleShow } = useShow(collapse?.value)
</script>
