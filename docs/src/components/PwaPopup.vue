<template>
  <transition name="pwa-update-popup">
    <el-card
      v-if="needRefresh"
      shadow="always"
      class="pwa-popup"
      role="alert"
    >
      <p class="pwa-popup-text">
        {{ t('docs.pwa.message') }}
      </p>
      <el-button
        type="primary"
        plain
        @click="updateServiceWorker()"
      >
        {{ t('docs.pwa.refresh') }}
      </el-button>
      <el-button
        plain
        @click="needRefresh = false"
      >
        {{ t('docs.pwa.close') }}
      </el-button>
    </el-card>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocaleInject } from 'element-plus'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { t } = useLocaleInject()
const _useRegisterSW = !import.meta.env.SSR
  ? useRegisterSW()
  : {
      needRefresh: ref(false),
      updateServiceWorker: () => undefined,
    }

const { needRefresh, updateServiceWorker } = _useRegisterSW
</script>

<style scoped>
.pwa-popup {
  position: fixed;
  right: 1em;
  bottom: 1em;
  z-index: 3000;
  text-align: center;
}
.pwa-popup .pwa-popup-text {
  margin: 0 0 1em;
}
.pwa-update-popup-enter-active,
.pwa-update-popup-leave-active {
  transition: var(--el-transition-md-fade);
}
.pwa-update-popup-enter,
.pwa-update-popup-leave-to {
  opacity: 0;
  transform: translate(0, 50%) scale(0.5);
}
</style>
