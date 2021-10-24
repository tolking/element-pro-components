import { defineComponent } from 'vue'
import { ElRadioButton } from 'element-plus'
import { createDefault } from '../Radio/Radio'
import props from '../Radio/props'

export default defineComponent({
  name: 'ProRadioButton',
  props,
  emits: ['update:modelValue'],
  setup(props) {
    return createDefault<typeof ElRadioButton>(
      props,
      ElRadioButton,
      'pro-radio-button'
    )
  },
})
