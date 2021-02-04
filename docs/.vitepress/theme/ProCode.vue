<template>
  <div class="pro-code">
    <div class="source">
      <slot />
    </div>
    <div ref="meta" class="meta">
      <div v-if="$slots.description" class="description">
        <slot name="description" />
      </div>
      <div class="language-html">
        <slot name="code" />
      </div>
    </div>
    <div
      :class="{ 'is-fixed': isFixContorl }"
      ref="control"
      class="control"
      @click="toggleShow"
    >
      <i :class="[show ? 'el-icon-caret-top' : 'el-icon-caret-bottom']" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useShow } from '/@src/index'

const { show, toggleShow } = useShow()
const meta = ref(null)
const control = ref(null)
const isFixContorl = ref(false)
const codeAreaHeight = ref(0)

onMounted(() => {
  const foundDescs = meta.value.getElementsByClassName('description')
  const foundCodes = meta.value.getElementsByClassName('language-html')

  if (foundDescs.length) {
    codeAreaHeight.value =
      foundDescs[0].clientHeight + foundCodes[0].clientHeight + 30
  } else {
    codeAreaHeight.value = foundCodes[0].clientHeight + 20
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(show, (value) => {
  if (value) {
    meta.value.style.height = `${codeAreaHeight.value}px`
    window.addEventListener('scroll', handleScroll)
    setTimeout(handleScroll, 100)
  } else {
    meta.value.style.height = '0'
    window.removeEventListener('scroll', handleScroll)
  }
})

function handleScroll() {
  const { top, bottom } = meta.value.getBoundingClientRect()
  isFixContorl.value =
    bottom > window.innerHeight && top + 44 <= window.innerHeight
}
</script>

<style>
.pro-code {
  margin-bottom: 1rem;
  border: 1px solid var(--c-divider);
  border-radius: 3px;
  background: var(--c-bg);
  transition: all 0.2s;
}
.pro-code:hover {
  box-shadow: var(--shadow-2);
}
.pro-code .source {
  padding: 24px;
}
.pro-code .meta {
  padding: 0 10px;
  height: 0;
  background-color: var(--c-page-background);
  overflow: hidden;
  transition: height 0.2s;
}
.pro-code .meta .description {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid var(--c-divider);
  box-sizing: border-box;
  background: var(--c-bg);
  font-size: 14px;
  line-height: 22px;
  color: var(--c-text-light-1);
  word-break: break-word;
}
.pro-code .meta .description p {
  margin: 0;
  line-height: 26px;
}
.pro-code .meta .description code {
  display: inline-block;
  padding: 1px 5px;
  margin: 0 4px;
  height: 18px;
  border-radius: 3px;
  background-color: var(--code-inline-bg-color);
  font-size: 12px;
  line-height: 18px;
  color: var(--c-text-light);
}
.pro-code .control {
  height: 44px;
  box-sizing: border-box;
  border-top: 1px solid var(--c-divider);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: var(--c-bg);
  text-align: center;
  color: var(--c-text);
  cursor: pointer;
  width: 100%;
  user-select: none;
}
.pro-code .control.is-fixed {
  position: sticky;
  z-index: 11;
  bottom: 0;
}
.pro-code .control:hover {
  background-color: var(--c-page-background);
  color: var(--c-brand);
}
.pro-code .control > i {
  display: inline-block;
  font-size: 16px;
  line-height: 44px;
  transition: all 0.3s;
}
</style>
