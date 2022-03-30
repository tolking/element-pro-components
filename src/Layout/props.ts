import props from '../Menu/props'

type MenuKeys = Array<keyof typeof props>

export const menuKeys = Object.keys(props) as MenuKeys

export default {
  ...props,
  fixedHeader: {
    type: Boolean,
    default: true,
  },
  transition: String,
  keepAlive: {
    type: Boolean,
    default: false,
  },
  include: [String, RegExp, Array],
  exclude: [String, RegExp, Array],
  max: [String, Number],
}
