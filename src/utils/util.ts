import type { ScreenSize } from '../types/index'

export function getScreenSize(width: number): ScreenSize {
  if (width >= 1920) {
    return 'xl'
  } else if (width >= 1200) {
    return 'lg'
  } else if (width >= 992) {
    return 'md'
  } else if (width >= 768) {
    return 'sm'
  } else {
    return 'xs'
  }
}
