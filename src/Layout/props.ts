import { PropType } from 'vue'
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
  include: [String, RegExp, Array] as PropType<
    string | RegExp | (string | RegExp)[]
  >,
  exclude: [String, RegExp, Array] as PropType<
    string | RegExp | (string | RegExp)[]
  >,
  max: [String, Number],
}
