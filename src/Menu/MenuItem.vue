<template>
  <el-menu-item v-if="!checkItemChildren(item)" :index="item.path">
    <item :item="item" />
  </el-menu-item>

  <el-submenu v-else :index="item.path">
    <template v-if="item.meta" slot="title">
      <pro-svg v-if="useSvg" :icon="item.meta.icon"></pro-svg>
      <i v-else :class="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
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
        <item :item="child" />
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
import Item from './Item'

export default {
  name: 'MenuItem',
  components: { Item },
  inject: {
    useSvg: {
      default: false
    }
  },
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
