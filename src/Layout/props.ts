import props from '../Menu/props'

export default Object.assign(
  {
    fixedHeader: {
      type: Boolean,
      default: true,
    },
    fixedMain: {
      type: Boolean,
      default: true,
    },
    transition: String,
  },
  props
)
