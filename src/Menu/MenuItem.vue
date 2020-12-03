<template>
  <el-menu-item v-if="!checkItemChildren(item)" :index="item.path">
    <menu-link :item="item" />
  </el-menu-item>

  <el-submenu v-else :index="item.path">
    <template v-if="item.meta" #title>
      <i v-if="item.meta.icon" :class="item.meta.icon" />
      <span v-if="item.meta.title">{{ item.meta.title }}</span>
    </template>

    <template v-for="child in item.children">
      <menu-item
        v-if="checkItemChildren(child)"
        :item="child"
        :key="child.path"
      />
      <el-menu-item
        v-else
        :to="child.path"
        :key="child.name"
        :index="child.path"
      >
        <menu-link :item="child" />
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
import { ElMenuItem, ElSubmenu } from 'element-plus'
import MenuLink from './MenuLink.vue'

export default {
  name: 'MenuItem',
  components: { ElMenuItem, ElSubmenu, MenuLink },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkItemChildren(item) {
      return item.children ? item.children.length > 1 : false
    }
  }
}
</script>
