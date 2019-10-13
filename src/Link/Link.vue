<template>
  <a :rel="rel" class="pro-link" @click="handleClick">
    <slot />
  </a>
</template>

<script>
import { checkUrl } from 'element-pro-components/src/utils/validate'

export default {
  name: 'ProLink',
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    linkPath() {
      return typeof this.to === 'object'
        ? this.to.redirect || this.to.path
        : this.to
    },
    rel() {
      return checkUrl(this.linkPath) ? 'noopener noreferrer' : null
    }
  },
  methods: {
    handleClick() {
      this.linkClick(this.to) && this.linkTo()
    },
    linkTo() {
      if (checkUrl(this.linkPath)) {
        window.open(this.linkPath)
      } else {
        this.$router.push(this.linkPath)
      }
    }
  }
}
</script>
