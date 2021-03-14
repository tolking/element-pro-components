import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { useProOptions, useShow, useScreenSize } from '../src/composables/index'
import { config } from '../src/utils/config'
import type { IScreenSize } from '/@src/types'

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
})
