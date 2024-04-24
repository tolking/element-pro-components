import { defineComponent, h } from 'vue'
import { ElAutocomplete } from 'element-plus'
import { useInputTag, inputTagEmits } from '../InputTag/index'
import { createDefault } from '../InputTag/InputTag'
import { autocompleteTagProps } from './props'
import type { IAutocompleteTagProps } from './index'

export default defineComponent({
  name: 'ProAutocompleteTag',
  props: autocompleteTagProps,
  emits: inputTagEmits,
  setup(props, { emit }) {
    const core = useInputTag<IAutocompleteTagProps>(props, emit)

    return () =>
      h(
        'div',
        {
          class: [
            'pro-input-tag',
            'pro-autocomplete-tag',
            core.focused.value && 'is-focus',
          ],
          onClick: core.inputRef.value?.focus,
        },
        createDefault<typeof ElAutocomplete, IAutocompleteTagProps>(
          ElAutocomplete,
          core,
        ),
      )
  },
})
