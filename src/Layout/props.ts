import { menuProps } from '../Menu/props'

type MenuKeys = Array<keyof typeof menuProps>

export const menuKeys = Object.keys(menuProps) as MenuKeys

export const layoutProps = {
  ...menuProps,
  fixedHeader: {
    type: Boolean,
    default: true,
  },
  transition: String,
  keepAlive: Boolean,
  include: [String, RegExp, Array],
  exclude: [String, RegExp, Array],
  max: [String, Number],
}
