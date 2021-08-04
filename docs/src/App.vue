<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core'
import { useLang } from './composables'
import langList from './lang/index'

const lang = useLang()
const locale = computed(() => langList[lang.value])
</script>
