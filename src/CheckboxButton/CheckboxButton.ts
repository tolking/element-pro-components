import { defineComponent } from 'vue'
import { ElCheckboxButton } from 'element-plus'
import { modelValueEmit } from '../utils/index'
import { createDefault } from '../Checkbox/Checkbox'
import props from '../Checkbox/props'

export default defineComponent({
  name: 'ProCheckboxButton',
  props,
  emits: modelValueEmit,
  setup(props) {
    return createDefault<typeof ElCheckboxButton>(
      props,
      ElCheckboxButton,
      'pro-checkbox-button'
    )
  },
})
