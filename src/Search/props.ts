import { formProps, formEmits } from '../Form/props'
import type { PropType } from 'vue'
import type { ISearchConfigProp } from './type'

export const searchProps = {
  ...formProps,
  config: {
    type: Object as PropType<ISearchConfigProp>,
    default: () => ({}),
  },
}

export const searchEmits = formEmits
