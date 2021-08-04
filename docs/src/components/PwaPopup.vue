<template>
  <transition name="pwa-update-popup">
    <div
      v-if="needRefresh"
      class="pwa-popup"
      role="alert"
    >
      <p class="pwa-popup-text">
        {{ t('docs.pwa.message') }}
      </p>
      <button @click="updateServiceWorker()">
        {{ t('docs.pwa.refresh') }}
      </button>
      <button @click="needRefresh = false">
        {{ t('docs.pwa.close') }}
      </button>
    </div>
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
  padding: 1em;
  border: 1px solid var(--c-brand);
  border-radius: 3px;
  background: var(--c-white);
  box-shadow: var(--shadow-2);
  text-align: center;
  z-index: 1200;
}
.pwa-popup .pwa-popup-text {
  margin: 0;
  padding: 0;
  color: var(--c-text);
}
.pwa-popup button {
  margin-top: 0.5em;
  padding: 0.25em 1.5em;
}
.pwa-popup button:last-child {
  margin-left: 1em;
}
.pwa-update-popup-enter-active,
.pwa-update-popup-leave-active {
  transition: all 0.3s;
}
.pwa-update-popup-enter,
.pwa-update-popup-leave-to {
  opacity: 0;
  transform: translate(0, 50%) scale(0.5);
}
</style>
