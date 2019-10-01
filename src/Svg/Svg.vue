<template>
  <svg
    :style="{ width: width, height: height, fill: fill }"
    aria-hidden="true"
    class="pro-svg"
  >
    <use :xlink:href="'#icon-' + icon" />
  </svg>
</template>

<script>
export default {
  name: 'ProSvg',
  props: {
    icon: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    width: {
      type: String,
      default: '1em'
    },
    height: {
      type: String,
      default: '1em'
    }
  }
}
</script>

<style>
.pro-svg {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
