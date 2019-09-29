<template>
  <div>
    <i :class="icon" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Item',
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
