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
      <pro-layout-header @toggle-collapse="toggleShow">
        <template #left>
          <slot name="left-header" />
        </template>
        <template #right>
          <slot name="right-header" />
        </template>
      </pro-layout-header>
      <slot name="bottom-header" />
      <pro-layout-main :transition="transition" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { defineProps, toRefs, useContext } from 'vue'
import ProLayoutAside from './LayoutAside.vue'
import ProLayoutHeader from './LayoutHeader.vue'
import ProLayoutMain from './LayoutMain.vue'
import { usrFilterAttrs, useShow } from '../composables/index'

const props = defineProps<{
  collapse: boolean
  transition?: string
}>()
const { collapse, transition } = toRefs(props)
const { slots } = useContext()
const attrs = usrFilterAttrs()
const { show, toggleShow } = useShow(collapse)
</script>

<style lang="postcss">
.pro-layout {
  display: flex;
  height: var(--layout-height);
  overflow: hidden;
  & .pro-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: var(--c-page-background);
  }
}
</style>
