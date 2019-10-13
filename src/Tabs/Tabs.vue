<template>
  <el-scrollbar :vertical="false" class="pro-tabs">
    <pro-link
      v-for="item in tabsList"
      :key="item.name || item.redirect || item.path"
      :to="item"
    >
      <span>{{ item.meta.title || item.name }}</span>
      <i class="el-icon-close" @click.prevent.stop="() => closeTag(item)" />
    </pro-link>
  </el-scrollbar>
</template>

<script>
import ProLink from 'element-pro-components/src/Link'

export default {
  name: 'ProTabs',
  components: { ProLink },
  watch: {
    $route: {
      handler(val) {
        this.addTag(val)
      },
      immediate: true
    }
  },
  data() {
    return {
      tabsList: []
    }
  },
  methods: {
    addTag(tag) {
      this.tabsList.push(tag)
    },
    closeTag(tag) {
      this.tabsList = this.tabsList.filter(item => item.path !== tag.path)
    }
  }
}
</script>
