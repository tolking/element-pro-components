<template>
  <el-container>
    <el-aside>
      <pro-aside :routers="routers" />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import ProAside from '../Aside'

export default {
  name: 'ProLayout',
  components: { ProAside },
  props: {
    routers: {
      type: Array,
      default: () => []
    }
  }
}
</script>
