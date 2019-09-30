<template>
  <a :rel="rel" @click="handleClick">
    <slot />
  </a>
</template>

<script>
import { checkUrl } from '../utils/validate'

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
      return checkUrl(this.to) ? 'noopener' : null
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
