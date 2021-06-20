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
          <!-- TODO: remove slots `left-header` `right-header` `bottom-header` -->
          <slot name="left-header" />
          <slot name="header-left" />
        </template>
        <template #right>
          <slot name="right-header" />
          <slot name="header-right" />
        </template>
      </pro-layout-header>
      <slot name="bottom-header" />
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

<script setup name="ProLayout" lang="ts">
import { defineProps, toRefs, useContext } from 'vue'
import ProLayoutAside from './LayoutAside.vue'
import ProLayoutHeader from './LayoutHeader.vue'
import ProLayoutMain from './LayoutMain.vue'
import { useAttrs, useShow } from '../composables/index'

const props = defineProps<{
  collapse?: boolean
  transition?: string
}>()
const { collapse, transition } = toRefs(props)
const { slots } = useContext()
const attrs = useAttrs()
const { show, toggleShow } = useShow(collapse?.value)
</script>
