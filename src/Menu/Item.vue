<template>
  <div>
    <pro-svg v-if="useSvg" :icon="icon"></pro-svg>
    <i v-else :class="icon" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
import ProSvg from '../Svg'

export default {
  name: 'Item',
  components: { ProSvg },
  inject: {
    useSvg: {
      default: false
    }
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
