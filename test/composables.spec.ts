import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import {
  useProOptions,
  useShow,
  useScreenSize,
  useRow,
  useCol,
} from '../src/composables/index'
import { config } from '../src/utils/config'
import type { IScreenSize } from '/@src/types'

const _mount = (options: Record<string, unknown>) =>
  mount({
    template: '<div />',
    ...options,
  })

describe('some composables', () => {
  describe('useProOptions', () => {
    expect(useProOptions()).toEqual(config)
  })

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

  describe('useScreenSize', () => {
    test('size', async () => {
      const wrapper = await mount({
        template: '<div :class="size" />',
        setup() {
          const size = useScreenSize()
          return { size }
        },
      })
      const vm = (wrapper.vm as unknown) as { size: IScreenSize }

      expect(vm.size).toBe('xs')
      expect(wrapper.find('.xs')).toBeTruthy()
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
