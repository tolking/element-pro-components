import { describe, test, expect, afterEach } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import ProCard from './Card'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProCard },
    ...options,
  })

describe('Card', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = await _mount({
      template: '<pro-card />',
    })

    expect(wrapper.find('.pro-card').exists()).toBe(true)
  })

  test.concurrent('default slot', async () => {
    const wrapper = await _mount({
      template: '<pro-card direction="row">default</pro-card>',
    })

    expect(wrapper.find('.pro-card .pro-card__body').text()).toBe('default')
    expect(wrapper.find('.pro-card .pro-card__body').classes()).not.toContain(
      'el-row'
    )
    expect(wrapper.find('.pro-card .pro-card__body').classes()).not.toContain(
      'is-direction-row'
    )
  })

  test.concurrent('header', async () => {
    const wrapper = await _mount({
      template: '<pro-card header="header" />',
    })

    expect(wrapper.find('.pro-card .pro-card__header').text()).toBe('header')
  })

  test.concurrent('header slot', async () => {
    const wrapper = await _mount({
      template: `
        <pro-card>
          <template #header>slot</template>
        </pro-card>
      `,
    })

    expect(wrapper.find('.pro-card .pro-card__header').text()).toBe('slot')
  })

  test.concurrent('body-style', async () => {
    const wrapper = await _mount({
      template: '<pro-card body-style="width: 100px;" />',
    })

    expect(wrapper.find('.pro-card .pro-card__body').attributes('style')).toBe(
      'width: 100px;'
    )
  })

  test.concurrent('shadow', async () => {
    const wrapper = await _mount({
      template: '<pro-card :shadow="shadow" />',
      setup() {
        const shadow = ref('always')
        return { shadow }
      },
    })
    const vm = (wrapper.vm as unknown) as { shadow: string }

    expect(wrapper.find('.pro-card').classes()).toContain('is-always-shadow')

    await (vm.shadow = 'hover')
    expect(wrapper.find('.pro-card').classes()).toContain('is-hover-shadow')

    await (vm.shadow = 'never')
    expect(wrapper.find('.pro-card').classes()).toContain('is-never-shadow')
  })

  test.concurrent('ghost', async () => {
    const wrapper = await _mount({
      template: '<pro-card ghost />',
    })

    expect(wrapper.find('.pro-card').classes()).toContain('is-ghost')
  })

  test.concurrent('nested card', async () => {
    const wrapper = await _mount({
      template: `
        <pro-card class="nested">
          <pro-card>1</pro-card>
          <pro-card>2</pro-card>
        </pro-card>
      `,
    })

    expect(
      wrapper.find('.pro-card.nested .pro-card__body').classes()
    ).toContain('el-row')
  })

  test.concurrent('row and col', async () => {
    const wrapper = await _mount({
      template: `
        <pro-card :gutter="40" class="nested">
          <pro-card :span="10">1</pro-card>
          <pro-card class="card">2</pro-card>
        </pro-card>
      `,
    })

    expect(
      wrapper.find('.pro-card.nested .pro-card__body .el-col').classes()
    ).toContain('el-col-10')
    expect(
      wrapper
        .find('.pro-card.nested .pro-card__body .el-col')
        .attributes('style')
    ).toBe('padding-left: 20px; padding-right: 20px;')
    expect(
      wrapper.find('.pro-card.nested .pro-card__body .card').attributes('style')
    ).toBe('margin-left: 20px; margin-right: 20px;')
  })

  test.concurrent('direction', async () => {
    const wrapper = await _mount({
      template: `
        <pro-card :direction="direction" class="nested">
          <pro-card>1</pro-card>
          <pro-card>2</pro-card>
        </pro-card>
      `,
      setup() {
        const direction = ref('row')
        return { direction }
      },
    })
    const vm = (wrapper.vm as unknown) as { direction: string }

    expect(wrapper.find('.pro-card .pro-card__body').classes()).toContain(
      'el-row'
    )
    expect(wrapper.find('.pro-card .pro-card__body').classes()).toContain(
      'is-direction-row'
    )

    await (vm.direction = 'column')
    expect(wrapper.find('.pro-card .pro-card__body').classes()).toContain(
      'is-direction-column'
    )
  })

  test.concurrent('split', async () => {
    const wrapper = await _mount({
      template: `
        <pro-card :split="split" class="nested">
          <pro-card>1</pro-card>
          <pro-card>2</pro-card>
        </pro-card>
      `,
      setup() {
        const split = ref(false)
        return { split }
      },
    })
    const vm = (wrapper.vm as unknown) as { split: boolean }

    expect(wrapper.find('.pro-card').classes()).not.toContain('is-split')

    await (vm.split = true)
    expect(wrapper.find('.pro-card').classes()).toContain('is-split')
  })
})
