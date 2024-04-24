import { describe, test, expect, afterEach } from 'vitest'
import { reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import {
  useShow,
  useSharedBreakpoints,
  useCurrentBreakpoint,
  useBreakpointWidth,
  useRow,
  useCol,
  useSplitReactive,
} from './index'

const _mount = (options: Record<string, unknown>) =>
  mount({
    template: '<div />',
    ...options,
  })

describe('some composables', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('useShow', () => {
    test.concurrent('false', async () => {
      const { show, toggleShow } = useShow()

      expect(show.value).toBeFalsy()

      await toggleShow()

      expect(show.value).toBeTruthy()
    })
    test.concurrent('true', async () => {
      const { show, toggleShow } = useShow(true)

      expect(show.value).toBeTruthy()

      await toggleShow()

      expect(show.value).toBeFalsy()
    })
    test.concurrent('ref(false)', async () => {
      const { show, toggleShow } = useShow(ref(false))

      expect(show.value).toBeFalsy()

      await toggleShow()

      expect(show.value).toBeTruthy()
    })
  })

  describe('useSharedBreakpoints', () => {
    test.concurrent('size', () => {
      const breakpoints = useSharedBreakpoints()

      expect(breakpoints.sm.value).toBeFalsy()
    })
  })

  describe('useCurrentBreakpoint', () => {
    test.concurrent('size', () => {
      const size = useCurrentBreakpoint()

      expect(['xl', 'lg', 'md', 'sm', 'xs']).toContain(size.value)
    })
  })

  describe('useBreakpointWidth', () => {
    test.concurrent('default', () => {
      const width = useBreakpointWidth()

      expect(['90%', '80%', '70%', '60%', '50%']).toContain(width.value)
    })

    test.concurrent('default', () => {
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
    test.concurrent('gutter', async () => {
      const wrapper = await _mount({
        setup() {
          const { rowClass, rowStyle } = useRow({ gutter: 40 })
          return { rowClass, rowStyle }
        },
      })
      const vm = wrapper.vm as unknown as {
        rowClass: string[]
        rowStyle: { marginLeft: string; marginRight: string }
      }

      expect(vm.rowClass).toContain('el-row')
      expect(vm.rowStyle).toEqual({ marginLeft: '-20px', marginRight: '-20px' })
    })

    test.concurrent('type', async () => {
      const wrapper = await _mount({
        setup() {
          const { rowClass, rowStyle } = useRow({
            justify: 'end',
            align: 'bottom',
          })
          return { rowClass, rowStyle }
        },
      })
      const vm = wrapper.vm as unknown as {
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
    test.concurrent('span', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass, colStyle } = useCol({ span: 4 })
          return { colClass, colStyle }
        },
      })
      const vm = wrapper.vm as unknown as {
        colClass: string[]
        colStyle: { marginLeft?: string; marginRight?: string }
      }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-4')
      expect(vm.colStyle).toEqual({})
    })

    test.concurrent('offset', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass } = useCol({ offset: 4 })
          return { colClass }
        },
      })
      const vm = wrapper.vm as unknown as { colClass: string[] }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-offset-4')
    })

    test.concurrent('xs', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass } = useCol({ xs: 4 })
          return { colClass }
        },
      })
      const vm = wrapper.vm as unknown as { colClass: string[] }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-xs-4')
    })

    test.concurrent('sm', async () => {
      const wrapper = await _mount({
        setup() {
          const { colClass } = useCol({ sm: { span: 4, pull: 2 } })
          return { colClass }
        },
      })
      const vm = wrapper.vm as unknown as { colClass: string[] }

      expect(vm.colClass).toContain('el-col')
      expect(vm.colClass).toContain('el-col-sm-4')
      expect(vm.colClass).toContain('el-col-sm-pull-2')
    })
  })

  describe('useSplitReactive', () => {
    test.concurrent('reactive', async () => {
      const props = reactive({ a: 4, b: 'b' })
      const [config] = useSplitReactive(props, ['a'])

      expect('a' in config).toBe(true)
      expect(config.a).toBe(props.a)
      expect('b' in config).toBe(false)

      await (props.a = 5)
      expect(config.a).toBe(props.a)
      expect(config.a).toBe(5)
    })

    test.concurrent('multiple', async () => {
      const props = reactive({ a: 1, b: 'b', c: [1] })
      const [config1, config2, config3] = useSplitReactive(
        props,
        ['a', 'b'],
        ['b', 'c'],
        ['c'],
      )

      expect('a' in config1).toBe(true)
      expect('b' in config1).toBe(true)
      expect('c' in config1).toBe(false)

      expect('a' in config2).toBe(false)
      expect('b' in config2).toBe(true)
      expect('c' in config2).toBe(true)

      expect('a' in config3).toBe(false)
      expect('b' in config3).toBe(false)
      expect('c' in config3).toBe(true)

      await (props.b = 'test')
      expect(config1.b).toBe(props.b)
      expect(config2.b).toBe(props.b)
      expect(config1.b).toBe('test')
    })

    test.concurrent('double', async () => {
      const props = reactive({ a: 1, b: 'b', c: [1] })
      const [data] = useSplitReactive(props, ['a', 'b'])
      const [config] = useSplitReactive(data, ['a'])

      expect('a' in config).toBe(true)
      expect(config.a).toBe(props.a)
      expect('b' in config).toBe(false)

      await (props.a = 5)
      expect(config.a).toBe(props.a)
      expect(config.a).toBe(5)

      await (data.a = 6)
      expect(props.a).toBe(5)
      expect(data.a).toBe(6)
      expect(config.a).toBe(6)
    })
  })
})
