<template>
  <div v-if="value.total > 0" class="page">
    <el-pagination
      :current-page="value.current"
      :total="value.total"
      :page-sizes="sizeList"
      background
      layout="prev, pager, next, sizes"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
export default {
  name: 'AppPage',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return { current: 1, total: 0, size: 50 }
      }
    }
  },
  data() {
    return {
      sizeList: [50, 100, 200, 500, 1000]
    }
  },
  methods: {
    handleCurrentChange(page) {
      this.value.current = page
      this.$emit('change', this.value)
      this.$nextTick(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
      })
    },
    handleSizeChange(size) {
      this.value.size = size
      this.$emit('change', this.value)
      this.$nextTick(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .page {
    padding: 15px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
