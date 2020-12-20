<template>
  <pro-layout>
    <template #logo="{ collapse }">
      <p>{{ collapse ? 'E' : 'element-pro' }}</p>
    </template>
    <!-- <template #menu="{ meta }">
      <span>{{ meta.title + meta.icon }}</span>
    </template> -->
    <template #left-header>
      <pro-breadcrumb />
    </template>
    <template #right-header>
      <p>right-header</p>
    </template>
    <template #bottom-header>
      <pro-tabs />
    </template>
  </pro-layout>
</template>

<script setup lang="ts"></script>
