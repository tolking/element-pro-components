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
    rel() {
      return checkUrl(this.to) ? 'noopener noreferrer' : null
    }
  },
  methods: {
    handleClick() {
      this.linkClick(this.to) && this.linkTo()
    },
    linkTo() {
      if (checkUrl(this.to)) {
        window.open(this.to)
      } else {
        this.$router.push(this.to)
      }
    }
  }
}
</script>
