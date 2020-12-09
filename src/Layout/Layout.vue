<template>
  <el-container class="pro-layout">
    <component
      :is="sideType"
      v-bind="setSide()"
      @close="isMobile && (drawer = false)"
    >
      <el-scrollbar>
        <template v-if="$slots.asideTop">
          <slot name="asideTop" />
        </template>
        <pro-menu :routers="routers" :collapse="collapse" />
        <template v-if="$slots.asideBottom">
          <slot name="asideBottom" />
        </template>
      </el-scrollbar>
    </component>
    <el-container>
      <el-header :height="headerHeight" class="pro-layout-header">
        <div>
          <span
            v-if="isMobile"
            class="pro-layout-header-fold-btn"
            @click="drawer = true"
          >
            <i class="el-icon-s-unfold"></i>
          </span>
          <span
            v-else
            class="pro-layout-header-fold-btn"
            @click="collapse = !collapse"
          >
            <i :class="collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
          </span>
          <template v-if="$slots.headerLeft">
            <slot name="headerLeft" />
          </template>
        </div>
        <div>
          <template v-if="$slots.headerRight">
            <slot name="headerRight" />
          </template>
          Header
        </div>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="transition-main" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
      <el-footer
        v-if="showFooter"
        :height="footerHeight"
        :style="'line-height:' + footerHeight"
        class="pro-footer"
      >
        <template v-if="$slots.footer">
          <slot name="footer" />
        </template>
        <template v-else>
          <a
            href="https://tolking.github.io/element-pro-components"
            target="_blank"
            rel="noopener noreferrer"
            >element-pro-components</a
          >
        </template>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {
  ElContainer,
  ElDrawer,
  ElAside,
  ElScrollbar,
  ElHeader,
  ElMain,
  ElFooter,
} from 'element-plus'
import ProMenu from '../Menu/index'

export default {
  name: 'ProLayout',
  components: {
    ElContainer,
    ElDrawer,
    ElAside,
    ElScrollbar,
    ElHeader,
    ElMain,
    ElFooter,
    ProMenu,
  },
  props: {
    asideWidth: {
      type: String,
      default: '300px'
    },
    headerHeight: {
      type: String,
      default: '60px'
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    footerHeight: {
      type: String,
      default: '60px'
    },
    routers: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sideType() {
      return this.isMobile ? 'el-drawer' : 'el-aside'
    },
  },
  data() {
    return {
      isMobile: false,
      drawer: false,
      collapse: false
    }
  },
  // mounted() {
  //   this.isMobile = navigator.userAgent.match(
  //     /(phone|pod|iPhone|iPod|Android|Mobile|BlackBerry|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //   )
  // },
  methods: {
    setSide() {
      if (this.isMobile) {
        this.collapse = false
        return {
          visible: this.drawer,
          size: '60%',
          direction: 'ltr',
          appendToBody: true,
          closeOnPressEscape: false
        }
      } else {
        return {
          width: this.collapse ? 'auto' : this.asideWidth
        }
      }
    }
  }
}
</script>

<style>
.pro-layout {
  min-height: 100vh;
}
.pro-layout .el-aside {
  border-right: 1px solid rgb(230, 230, 230);
}
.pro-layout .pro-layout-header {
  display: flex;
  justify-content: space-between;
}
.pro-layout .pro-layout-header-fold-btn .el-icon-s-fold,
.pro-layout .pro-layout-header-fold-btn .el-icon-s-unfold {
  font-size: 2.5rem;
}
.pro-layout .pro-footer {
  text-align: center;
}
</style>
