import { defineComponent } from 'vue'
import { ElRadioButton } from 'element-plus'
import { createDefault } from '../Radio/Radio'
import { radioProps, radioEmits } from '../Radio/props'

export default defineComponent({
  name: 'ProRadioButton',
  props: radioProps,
  emits: radioEmits,
  setup(props) {
    return createDefault<typeof ElRadioButton>(
      props,
      ElRadioButton,
      'pro-radio-button',
    )
  },
})
