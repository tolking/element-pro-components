<template>
  <el-scrollbar class="pro-tabs">
    <span v-for="item in tabsList" :key="item.path">
      <pro-link :to="item.path">
        <span>{{ item.meta.title || item.name }}</span>
      </pro-link>
      <i class="el-icon-close" @click="() => closeTag(item)" />
      <i class="el-icon-more" />
    </span>
  </el-scrollbar>
</template>

<script>
import ProLink from 'element-pro-components/src/Link'

export default {
  name: 'ProTabs',
  components: { ProLink },
  watch: {
    $route: {
      handler: function(val) {
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
