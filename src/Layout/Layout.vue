<template>
  <el-container>
    <el-aside>
      <el-scrollbar>
        <slot name="asideTop" />
        <pro-menu :routers="routers" :useSvg="useSvg" />
        <slot name="asideBottom" />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
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
  }
}
</script>
