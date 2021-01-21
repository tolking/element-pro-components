import { defineComponent } from 'vue'

export const select = defineComponent({
  props: {
    modelValue: {
      type: null,
      default: null,
    },
    data: {
      type: Array,
      default: () => [],
    },
    config: {
      type: Object,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    selectConfig(): {
      value: string
      label: string
      disabled: string
      name: string
    } {
      return Object.assign(
        {
          value: 'value',
          label: 'label',
          disabled: 'disabled',
          name: 'name',
        },
        this.config
      )
    },
  },
  methods: {
    upData(value: unknown) {
      this.$emit('update:modelValue', value)
    },
  },
})
