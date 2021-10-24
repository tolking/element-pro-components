import { defineComponent } from 'vue'
import { ElCheckboxButton } from 'element-plus'
import { createDefault } from '../Checkbox/Checkbox'
import props from '../Checkbox/props'

export default defineComponent({
  name: 'ProCheckboxButton',
  props,
  emits: ['update:modelValue'],
  setup(props) {
    return createDefault<typeof ElCheckboxButton>(
      props,
      ElCheckboxButton,
      'pro-checkbox-button'
    )
  },
})
