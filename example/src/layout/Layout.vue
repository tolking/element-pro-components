<template>
  <pro-layout transition="el-fade-in-linear">
    <template #logo="{ collapse }">
      <p>{{ collapse ? 'E' : 'element-pro' }}</p>
    </template>
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
