<template>
  <header class="pro-header el-header">
    <div class="header-slot">
      <span class="header-fold-btn" @click="toggleCollapse">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/>
        </svg>
      </span>
      <slot name="left" />
    </div>
    <div class="header-slot">
      <slot name="right" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['toggle-collapse'])

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>

<style>
.pro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  border-bottom: 1px solid var(--c-border);
}
.pro-header .header-slot {
  display: flex;
  align-items: center;
}
.pro-header .header-fold-btn {
  display: inline-block;
  margin-right: 10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}
</style>
