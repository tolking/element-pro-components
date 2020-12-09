<template>
  <pro-layout :routers="routes" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ProLayout } from '/element-pro/'

const { options: { routes }} = useRouter()
</script>
