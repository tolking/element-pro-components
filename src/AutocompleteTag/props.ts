import { commonProps } from '../InputTag/props'
import type { PropType } from 'vue'
import type { ExternalParam } from '../types/index'

export default {
  ...commonProps,
  valueKey: {
    type: String,
  },
  debounce: {
    type: Number,
  },
  placement: {
    type: String as PropType<
      'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
    >,
  },
  fetchSuggestions: {
    type: Function as PropType<
      (queryString: string, cb: (data: ExternalParam[]) => void) => void
    >,
  },
  popperClass: {
    type: String,
    default: '',
  },
  triggerOnFocus: {
    type: Boolean,
    default: true,
  },
  selectWhenUnmatched: {
    type: Boolean,
    default: false,
  },
  hideLoading: {
    type: Boolean,
    default: false,
  },
  popperAppendToBody: {
    type: Boolean,
    default: true,
  },
  highlightFirstItem: {
    type: Boolean,
    default: false,
  },
}
