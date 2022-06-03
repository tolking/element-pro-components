import { defineComponent } from 'vue'
import { ElCheckboxButton } from 'element-plus'
import { modelValueEmit } from '../utils/index'
import { createDefault } from '../Checkbox/Checkbox'
import { checkboxProps } from '../Checkbox/props'

export default defineComponent({
  name: 'ProCheckboxButton',
  props: checkboxProps,
  emits: modelValueEmit,
  setup(props) {
    return createDefault<typeof ElCheckboxButton>(
      props,
      ElCheckboxButton,
      'pro-checkbox-button'
    )
  },
})
