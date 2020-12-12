<template>
  <pro-layout>
    <template #logo="{ collapse }">
      <p>{{ collapse ? 'E' : 'element-pro'}}</p>
    </template>
    <template #left-header>
      <p>left-header</p>
    </template>
    <template #right-header>
      <p>right-header</p>
    </template>
    <template #footer>
      footer
    </template>
  </pro-layout>
</template>

<script setup lang="ts">

</script>
