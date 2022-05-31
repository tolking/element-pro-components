import { defineComponent, h } from 'vue'
import { ElAutocomplete } from 'element-plus'
import { useInputTag } from '../InputTag/useInputTag'
import { createDefault } from '../InputTag/InputTag'
import props from './props'
import emits from '../InputTag/emits'

export default defineComponent({
  name: 'ProAutocompleteTag',
  props,
  emits,
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
