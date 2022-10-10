import { describe, test, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ProFilterRoutes from './FilterRoutes'
import { initRouter } from '../__mocks__/index'
import type { RouteRecordRaw } from 'vue-router'

initRouter()

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProFilterRoutes },
    ...options,
  })
const getOptions = () =>
  Array.from(
    document.querySelectorAll<HTMLElement>(
      '.pro-filter-routes-popper .el-select-dropdown__item'
    ),
    (item) => item.innerHTML
  )

describe('FilterRoutes', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = _mount({
      template: '<pro-filter-routes />',
    })

    expect(wrapper.find('.pro-filter-routes').exists()).toBe(true)

    const options = getOptions()
    expect(options.length).toBe(7)
    expect(options[0]).toMatch('Home')
    expect(options[0]).toMatch('/index')
    expect(options[1]).toMatch('one')
    expect(options[1]).toMatch('/one')
    expect(options[2]).toMatch('oneIndex')
    expect(options[2]).toMatch('/one/index')
  })

  test.concurrent('routes', async () => {
    _mount({
      template: '<pro-filter-routes :routes="routes" />',
      setup() {
        const routes: RouteRecordRaw[] = [
          {
            path: '/one',
            component: { template: 'one page' },
            meta: { title: 'one' },
            children: [
              {
                path: '/one/index',
                component: { template: 'one index page' },
                meta: { title: 'oneIndex' },
              },
              {
                path: '/one/info',
                component: { template: 'one info page' },
                meta: { title: 'oneInfo' },
              },
            ],
          },
        ]

        return { routes }
      },
    })

    const options = getOptions()
    expect(options.length).toBe(3)
    expect(options[0]).toMatch('one')
    expect(options[0]).toMatch('/one')
    expect(options[1]).toMatch('oneIndex')
    expect(options[1]).toMatch('/one/index')
    expect(options[2]).toMatch('oneInfo')
    expect(options[2]).toMatch('/one/info')
  })

  test.concurrent('slots', () => {
    _mount({
      template: `
        <pro-filter-routes>
          <template #default="{item}">
            {{ item.label }}
          </template>
        </pro-filter-routes>
      `,
    })

    const options = getOptions()
    expect(options.length).toBe(7)
    expect(options[0]).toMatch('Home')
    expect(options[0]).not.toMatch('/index')
    expect(options[1]).toMatch('one')
    expect(options[1]).not.toMatch('/one')
    expect(options[2]).toMatch('oneIndex')
    expect(options[2]).not.toMatch('/one/index')
  })
})
