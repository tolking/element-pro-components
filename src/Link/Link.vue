<template>
  <component :is="whatType" v-bind="whatProps" @click.native="linkClick">
    <slot />
  </component>
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
    whatType() {
      return checkUrl(this.to) ? 'a' : 'router-link'
    },
    whatProps() {
      return checkUrl(this.to)
        ? { href: this.to, target: '_blank', rel: 'noopener' }
        : { to: this.to }
    }
  },
  methods: {
    linkClick() {
      this.$emit('linkClick')
    }
  }
}
</script>
