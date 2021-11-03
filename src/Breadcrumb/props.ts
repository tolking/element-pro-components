import type { PropType, Component } from 'vue'

export default {
  separator: {
    type: String,
  },
  separatorIcon: {
    type: [String, Object] as PropType<string | Component>,
  },
}
