<template>
  <p>{{ home }}</p>
  <p>{{ list }}</p>
  <pro-input-tag v-model="list" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const home = ref('Home')
const list = ref([])
</script>
