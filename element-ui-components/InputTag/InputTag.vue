<template>
  <div class="input-tag">
    <el-tag
      v-for="(item, index) in value"
      :key="index"
      :type="tagType"
      :size="tagSize"
      :hit="tagHit"
      :effect="tagEffect"
      closable
      @close="closeTag(item)"
    >{{ item }}</el-tag>
    <el-input
      v-model="input"
      v-bind="$attrs"
      type="text"
      @blur="addTag"
      @keyup.enter.native="addTag"
    />
  </div>
</template>

<script>
export default {
  name: 'InputTag',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    tagType: {
      type: String,
      default: null
    },
    tagSize: {
      type: String,
      default: null
    },
    tagHit: {
      type: Boolean,
      default: false
    },
    tagEffect: {
      type: String,
      default: 'light'
    }
  },
  data() {
    return {
      input: null
    }
  },
  methods: {
    addTag() {
      if (this.input) {
        this.value.push(this.input)
        this.$emit('change', this.value)
        this.input = null
      }
    },
    closeTag(item) {
      this.value.splice(this.value.indexOf(item), 1)
      this.$emit('change', this.value)
    }
  }
}
</script>

<style>
.input-tag {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  background-color: #fff;
}
.input-tag .el-tag {
  margin: 3px;
}
.input-tag .el-input {
  flex: 1;
}
.input-tag .el-input .el-input__inner {
  border: 0;
}
</style>
