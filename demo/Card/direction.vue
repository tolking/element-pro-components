<template>
  <pro-radio-button
    v-model="direction"
    :data="data"
  />
  <pro-card :direction="direction">
    <pro-card
      :span="12"
      shadow="never"
    >
      span-12
    </pro-card>
    <pro-card
      :span="6"
      shadow="never"
    >
      span-6
    </pro-card>
    <pro-card
      :span="3"
      shadow="never"
    >
      span-3
    </pro-card>
  </pro-card>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const direction = ref('row')
    const data = [
      { label: 'row', value: 'row' },
      { label: 'row-reverse', value: 'row-reverse' },
      { label: 'column', value: 'column' },
      { label: 'column-reverse', value: 'column-reverse' },
    ]

    return { direction, data }
  },
})
</script>
