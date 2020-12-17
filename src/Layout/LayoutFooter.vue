<template>
  <footer class="pro-footer el-footer">
    <slot>
      <a
        href="https://tolking.github.io/element-pro-components"
        target="_blank"
        rel="noopener noreferrer"
      >
        element-pro-components
      </a>
    </slot>
  </footer>
</template>

<script setup lang="ts">

</script>

<style>
.pro-footer {
  height: var(--footer-height);
  overflow: hidden;
  line-height: var(--footer-height);
  text-align: center;
}
</style>
