<template>
  <div class="pro-code">
    <div class="source">
      <slot name="source" />
    </div>
    <div
      ref="meta"
      class="meta"
    >
      <div
        v-if="$slots.description"
        class="description"
      >
        <slot name="description" />
      </div>
      <div class="language-html">
        <slot name="code" />
      </div>
    </div>
    <button
      :class="{ 'is-fixed': isFixContorl }"
      class="control"
      @click="toggleShow"
    >
      <caret-top
        v-if="show"
        class="control-icon"
      />
      <caret-bottom
        v-else
        class="control-icon"
      />
      <span class="control-text">
        {{ show ? t('docs.code.hide') : t('docs.code.show') }}
      </span>
      <div
        class="control-btn"
        @click.stop
      >
        <el-tooltip
          :content="t('docs.code.edit')"
          :trigger="['hover', 'focus']"
          :trigger-keys="['Enter']"
        >
          <video-play
            role="button"
            class="btn-icon"
            @click="open"
            @keydown.enter="open"
          />
        </el-tooltip>
        <el-tooltip
          :content="t('docs.code.view')"
          :trigger="['hover', 'focus']"
          :trigger-keys="[]"
        >
          <pro-link
            :to="link"
            class="btn-icon"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
              />
            </svg>
          </pro-link>
        </el-tooltip>
        <el-tooltip
          v-if="isSupported"
          :content="copied ? t('docs.code.copied') : t('docs.code.copy')"
          :trigger="['hover', 'focus']"
          :trigger-keys="['Enter']"
        >
          <document-copy
            role="button"
            class="btn-icon"
            @click="copy()"
            @keydown.enter="copy()"
          />
        </el-tooltip>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useLocale } from 'element-plus'
import {
  CaretTop,
  CaretBottom,
  DocumentCopy,
  VideoPlay,
} from '@element-plus/icons-vue'
import { useShow } from 'element-pro-components'
import { github } from '../utils/index'
import { useStackBlitz } from '../composables/index'

const props = defineProps<{
  link: string
  content: string
}>()
const { t } = useLocale()
const { show, toggleShow } = useShow()
const open = useStackBlitz(props)
const { isSupported, copied, copy } = useClipboard({
  source: decodeURIComponent(props.content),
})
const meta = ref<HTMLElement>({} as HTMLElement)
const isFixContorl = ref(false)
const codeAreaHeight = ref(0)
const link = computed(() => props.link?.replace(/^@/, github))

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
    setTimeout(handleScroll, 300) // Wait for the animation to finish
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
  margin: 1rem 0;
  border: var(--el-border);
  border-radius: var(--el-border-radius-base);
  background: var(--el-bg-color);
  transition: var(--el-transition-all);
}
.pro-code:hover {
  box-shadow: var(--el-box-shadow-lighter);
}
.pro-code .source {
  padding: 24px;
  overflow-x: scroll;
}
.pro-code .meta {
  padding: 0 10px;
  height: 0;
  background-color: var(--el-bg-color-page);
  overflow: hidden;
  transition: var(--el-transition-all);
}
.pro-code .meta .description {
  padding: 20px;
  margin: 10px 0;
  border: var(--el-border);
  box-sizing: border-box;
  background: var(--el-bg-color);
  font-size: 14px;
  line-height: 22px;
  color: var(--el-text-color-regular);
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
  border-radius: var(--el-border-radius-base);
  background-color: var(--docs-bg-code-inline);
  font-size: 12px;
  line-height: 18px;
}
.pro-code .control {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  box-sizing: border-box;
  border: 0;
  border-top: var(--el-border);
  border-bottom-left-radius: var(--el-border-radius-base);
  border-bottom-right-radius: var(--el-border-radius-base);
  background: var(--el-bg-color);
  text-align: center;
  color: var(--el-text-color-primary);
  cursor: pointer;
  width: 100%;
  user-select: none;
}
.pro-code .control.is-fixed {
  position: sticky;
  z-index: 1;
  bottom: 0;
}
.pro-code .control:hover {
  background-color: var(--el-bg-color-page);
  color: var(--el-color-primary);
}
.pro-code .control .control-icon {
  width: 16px;
  height: 16px;
  transform: translateX(35px);
  transition: var(--el-transition-md-fade);
}
.pro-code .control .control-text {
  opacity: 0;
  margin-left: 10px;
  transform: translateX(35px);
  transition: var(--el-transition-all);
}
.pro-code:hover .control .control-icon,
.pro-code .control:focus-visible .control-icon {
  transform: translateX(0);
}
.pro-code:hover .control .control-text,
.pro-code .control:focus-visible .control-text {
  opacity: 1;
  transform: translateX(0);
}
.pro-code .control .control-btn {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 24px;
  display: flex;
  align-items: center;
}
.pro-code .control .control-btn .btn-icon {
  margin-left: 12px;
  width: 24px;
  height: 24px;
  color: var(--el-text-color-primary);
}
.pro-code .control .control-btn .btn-icon:hover {
  color: var(--el-color-primary);
}
</style>
