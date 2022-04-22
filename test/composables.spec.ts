import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import {
  useShow,
  useSharedBreakpoints,
  useCurrentBreakpoint,
  useBreakpointWidth,
  useRow,
  useCol,
} from '../src/composables/index'

const _mount = (options: Record<string, unknown>) =>
  mount({
    template: '<div />',
    ...options,
  })

describe('some composables', () => {
  describe('useShow', () => {
    test('false', async () => {
      const { show, toggleShow } = useShow()

      expect(show.value).toBeFalsy()

      await toggleShow()

      expect(show.value).toBeTruthy()
    })
    test('true', async () => {
      const { show, toggleShow } = useShow(true)

      expect(show.value).toBeTruthy()

      await toggleShow()

      expect(show.value).toBeFalsy()
    })
    test('ref(false)', async () => {
      const { show, toggleShow } = useShow(ref(false))

      expect(show.value).toBeFalsy()

      await toggleShow()

      expect(show.value).toBeTruthy()
    })
  })

  describe('useSharedBreakpoints', () => {
    test('size', () => {
      const breakpoints = useSharedBreakpoints()

      expect(breakpoints.sm.value).toBeFalsy()
    })
  })

  describe('useCurrentBreakpoint', () => {
    test('size', () => {
      const size = useCurrentBreakpoint()

      expect(['xl', 'lg', 'md', 'sm', 'xs']).toContain(size.value)
    })
  })

  describe('useBreakpointWidth', () => {
    test('default', () => {
      const width = useBreakpointWidth()

      expect(['90%', '80%', '70%', '60%', '50%']).toContain(width.value)
    })

    test('default', () => {
      const config = {
        xs: '100px',
        sm: '200px',
        md: '300px',
        lg: '400px',
        xl: '500px',
      }
      const width = useBreakpointWidth(config)

      expect(Object.values(config)).toContain(width.value)
    })
  })

  describe('useRow', () => {
    test('gutter', async () => {
      const wrapper = await _mount({
        setup() {
          const { rowClass, rowStyle } = useRow({ gutter: 40 })
          return { rowClass, rowStyle }
        },
      })
      const vm = (wrapper.vm as unknown) as {
        rowClass: string[]
        rowStyle: { marginLeft: string; marginRight: string }
      }

      expect(vm.rowClass).toContain('el-row')
      expect(vm.rowStyle).toEqual({ marginLeft: '-20px', marginRight: '-20px' })
    })

    test('type', async () => {
      const wrapper = await _mount({
        setup() {
          const { rowClass, rowStyle } = useRow({
            justify: 'end',
            align: 'bottom',
          })
          return { rowClass, rowStyle }
        },
      })
      const vm = (wrapper.vm as unknown) as {
        rowClass: string[]
        rowStyle: { marginLeft: string; marginRight: string }
      }

      expect(vm.rowClass).toContain('el-row')
      expect(vm.rowClass).toContain('is-justify-end')
      expect(vm.rowClass).toContain('is-align-bottom')
      expect(vm.rowStyle).toEqual({ marginLeft: '', marginRight: '' })
    })
  })

  describe('useCol', () => {
    test('span', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass, colStyle } = useCol({ span: 4 })
          return { colClass, colStyle }
        },
      })
      const vm = (wrapper.vm as unknown) as {
        colClass: string[]
        colStyle: { marginLeft?: string; marginRight?: string }
      }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-4')
      expect(vm.colStyle).toEqual({})
    })

    test('offset', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass } = useCol({ offset: 4 })
          return { colClass }
        },
      })
      const vm = (wrapper.vm as unknown) as { colClass: string[] }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-offset-4')
    })

    test('xs', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass } = useCol({ xs: 4 })
          return { colClass }
        },
      })
      const vm = (wrapper.vm as unknown) as { colClass: string[] }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-xs-4')
    })

    test('sm', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass } = useCol({ sm: { span: 4, pull: 2 } })
          return { colClass }
        },
      })
      const vm = (wrapper.vm as unknown) as { colClass: string[] }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-sm-4')
      expect(vm.colClass).toContain('el-col-sm-pull-2')
    })
  })
})
