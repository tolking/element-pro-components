import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import ProLink from '../src/Link/Link.vue'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProLink },
    ...options,
  })

describe('Link.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('test prop to', async () => {
    const wrapper = _mount({
      template: '<pro-link :to="to">link</pro-link>',
      setup() {
        const to = ref('')
        return { to }
      },
    })
    const vm = (wrapper.vm as unknown) as { to: string }

    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.find('.pro-link').text()).toBe('link')

    await (vm.to = 'https://ououe.com')
    expect(wrapper.find('span').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.attributes('href')).toBe('https://ououe.com')
    expect(wrapper.attributes('target')).toBe('_blank')
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')

    await (vm.to = '/dev/Form')
    expect(wrapper.find('span').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(false)
    expect(wrapper.find('router-link').exists()).toBe(true)
    expect(wrapper.attributes('to')).toBe('/dev/Form')
  })
})
