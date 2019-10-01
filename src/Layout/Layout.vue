<template>
  <el-container class="pro-layout">
    <el-aside>
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
      <el-header class="pro-layout-header">
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
            bsss
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
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import ProMenu from '../Menu'

export default {
  name: 'ProLayout',
  components: { ProMenu },
  props: {
    routers: {
      type: Array,
      default: () => []
    },
    useSvg: {
      type: Boolean,
      default: false
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
</style>
