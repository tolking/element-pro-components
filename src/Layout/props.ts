import props from '../Menu/props'

export default {
  ...props,
  fixedHeader: {
    type: Boolean,
    default: false,
  },
  fixedMain: {
    type: Boolean,
    default: false,
  },
  transition: String,
}
