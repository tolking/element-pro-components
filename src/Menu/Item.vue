<template>
  <pro-link v-if="item.meta" :to="item.path">
    <pro-svg v-if="useSvg" :icon="item.meta.icon"></pro-svg>
    <i v-else :class="item.meta.icon" />
    <span>{{ item.meta.title }}</span>
  </pro-link>
</template>

<script>
import ProLink from 'element-pro-components/src/Link'
import ProSvg from 'element-pro-components/src/Svg'

export default {
  name: 'Item',
  components: { ProLink, ProSvg },
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
  }
}
</script>
