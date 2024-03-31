import { Ref, computed } from 'vue'
import { createSharedComposable, useBreakpoints } from '@vueuse/core'
import type { IScreenSize } from '../types/index'

/**
 * Reactive viewport breakpoints
 *
 * `sm`: 768, `md`: 992, `lg`: 1200, `xl`: 1920
 */
export const useSharedBreakpoints = createSharedComposable<
  () => ReturnType<typeof useBreakpoints<'sm' | 'md' | 'lg' | 'xl'>>
>(() => useBreakpoints({ sm: 768, md: 992, lg: 1200, xl: 1920 }))

/**
 * The breakpoint at which the current media query is located
 *
 * `xl`: > 1920, `lg`: > 1200, `md`: > 992, `sm`: > 768, `xs`: < 768
 */
export function useCurrentBreakpoint(): Ref<IScreenSize> {
  const breakpoints = useSharedBreakpoints()
  const xl = breakpoints.greater('xl')
  const lg = breakpoints.greater('lg')
  const md = breakpoints.greater('md')
  const sm = breakpoints.greater('sm')

  return computed(() => {
    if (xl.value) {
      return 'xl'
    } else if (lg.value) {
      return 'lg'
    } else if (md.value) {
      return 'md'
    } else if (sm.value) {
      return 'sm'
    } else {
      return 'xs'
    }
  })
}

/**
 * Get the width of the responsive breakpoint
 * @param config the config of width
 */
export function useBreakpointWidth(
  config?: Partial<Record<IScreenSize, string>>,
): Ref<string> {
  const breakpoint = useCurrentBreakpoint()
  const sizeWidth = Object.assign(
    {
      xs: '90%',
      sm: '80%',
      md: '70%',
      lg: '60%',
      xl: '50%',
    },
    config || {},
  )

  return computed(() => sizeWidth[breakpoint.value])
}
