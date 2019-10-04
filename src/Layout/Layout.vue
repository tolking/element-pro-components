<template>
  <el-container class="pro-layout">
    <el-aside :width="collapse ? 'auto' : asideWidth">
      <el-scrollbar>
        <template v-if="$slots.asideTop">
          <slot name="asideTop" />
        </template>
        <pro-menu :routers="routers" :collapse="collapse" :useSvg="useSvg" />
        <template v-if="$slots.asideBottom">
          <slot name="asideBottom" />
        </template>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header :height="headerHeight" class="pro-layout-header">
        <div>
          <span
            class="pro-layout-header-fold-btn"
            @click="collapse = !collapse"
          >
            <i :class="collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
          </span>
          <template v-if="$slots.headerLeft">
            <slot name="headerLeft" />
          </template>
          <template v-else>
            <pro-breadcrumb :routers="routers" />
          </template>
        </div>
        <div>
          <template v-if="$slots.headerRight">
            <slot name="headerRight" />
          </template>
          Header
        </div>
      </el-header>
      <el-main>Main</el-main>
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
          <span>&copy; {{ year }} </span>
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

<script>
import ProMenu from 'element-pro-components/src/Menu'
import ProBreadcrumb from 'element-pro-components/src/Breadcrumb'

export default {
  name: 'ProLayout',
  components: { ProMenu, ProBreadcrumb },
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
    },
    useSvg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>

<style>
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
