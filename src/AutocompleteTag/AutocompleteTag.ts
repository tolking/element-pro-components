import { defineComponent, h } from 'vue'
import { ElAutocomplete } from 'element-plus'
import { useInputTag } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import { createDefault } from '../InputTag/InputTag'
import props from './props'

export default defineComponent({
  name: 'ProAutocompleteTag',
  props,
  emits: modelValueEmit,
  setup(props, { emit }) {
    const core = useInputTag(props, emit)

    return () =>
      h(
        'div',
        { class: 'pro-autocomplete-tag' },
        createDefault<typeof ElAutocomplete>(ElAutocomplete, core)
      )
  },
})
