<template>
  <el-scrollbar>
    <slot name="asideTop" />
    <el-menu :default-active="$route.path" v-bind="$attrs">
      <aside-item v-for="route in $asideList" :key="route.path" :item="route">
        <!-- <slot v-if="$slot.asideItem" name="asideItem" /> -->
      </aside-item>
    </el-menu>
    <slot name="asideBottom" />
  </el-scrollbar>
</template>

<script>
import AsideItem from './AsideItem'
import { routerFilterByHidden } from '../utils/router'

export default {
  name: 'ProAside',
  components: { AsideItem },
  props: {
    routers: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    $asideList() {
      const routerList = this.routers.length
        ? this.routers
        : this.$router.options.routes
      return routerFilterByHidden(routerList)
    }
  }
}
</script>
