import { defineComponent } from 'vue'
import { ElCheckboxButton } from 'element-plus'
import { createDefault } from '../Checkbox/Checkbox'
import { checkboxProps, checkboxEmits } from '../Checkbox/props'

export default defineComponent({
  name: 'ProCheckboxButton',
  props: checkboxProps,
  emits: checkboxEmits,
  setup(props) {
    return createDefault<typeof ElCheckboxButton>(
      props,
      ElCheckboxButton,
      'pro-checkbox-button',
    )
  },
})
