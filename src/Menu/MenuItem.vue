<template>
  <li class="pro-menu-item">
    <template v-if="!checkItemChildren(item)">
      <pro-link :to="item.path">
        <el-menu-item :index="item.path">
          <item
            v-if="item.meta"
            :icon="item.meta.icon"
            :title="item.meta.title"
          />
        </el-menu-item>
      </pro-link>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="item.meta.title"
        />
      </template>

      <template v-for="child in item.children">
        <menu-item
          v-if="checkItemChildren(child)"
          :item="child"
          :key="child.path"
        />
        <pro-link v-else :to="child.path" :key="child.name">
          <el-menu-item :index="child.path">
            <item
              v-if="item.meta"
              :icon="child.meta.icon"
              :title="child.meta.title"
            />
          </el-menu-item>
        </pro-link>
      </template>
    </el-submenu>
  </li>
</template>

<script>
import ProLink from '../Link'
import Item from './Item'

export default {
  name: 'MenuItem',
  components: { ProLink, Item },
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

<style>
.el-menu--horizontal .pro-menu-item {
  display: inline-block;
}
</style>
