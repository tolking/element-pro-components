import { describe, test, expect, afterEach } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { ElInput } from 'element-plus'
import { ProArrayForm, ProArrayFormContent } from './index'
import type { IFormColumns } from '../Form/index'

const columns: IFormColumns = [
  {
    label: 'input',
    prop: 'input',
    component: 'el-input',
  },
]
const addClass = '.pro-array-form-btn-add'
const deleteClass = '.pro-array-form-btn-delete'
const contentClass = '.pro-array-form-content'
const contentItemClass = '.pro-array-form-content-item'
const menuClass = '.pro-form-menu'

describe('ArrayFormContent', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-array-form-content />',
      components: { ProArrayFormContent },
    })

    expect(wrapper.find(addClass).exists()).toBe(true)
    expect(wrapper.find(contentClass).exists()).toBe(false)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find(contentClass).exists()).toBe(false)
  })

  test.concurrent('columns', async () => {
    const wrapper = mount(
      {
        template: `
        <pro-array-form-content
          v-model="form"
          :columns="columns"
        />
      `,
        components: { ProArrayFormContent },
        setup() {
          const form = ref()
          return { form, columns: ref([...columns]) }
        },
      },
      {
        global: {
          components: { ElInput },
        },
      }
    )

    expect(wrapper.find(contentClass).exists()).toBe(false)
    expect(wrapper.find(addClass).exists()).toBe(true)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(1)
    expect(wrapper.find(contentClass).exists()).toBe(true)
    expect(
      wrapper.findAll(`${contentClass} ${contentItemClass} .pro-form-item`)
    ).toHaveLength(1)
    expect(
      wrapper
        .find(
          `${contentClass} ${contentItemClass} .pro-form-item .el-form-item__content div`
        )
        .classes()
    ).toContain('el-input')

    await wrapper.vm.columns.push({
      label: 'textarea',
      prop: 'textarea',
      component: 'el-input',
      props: { type: 'textarea' },
    })
    expect(
      wrapper.findAll(`${contentClass} ${contentItemClass} .pro-form-item`)
    ).toHaveLength(2)
    expect(
      wrapper
        .find(
          `${contentClass} ${contentItemClass} .pro-form-item:nth-child(2) .el-form-item__content div`
        )
        .classes()
    ).toContain('el-textarea')

    await wrapper.find(deleteClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(0)
    expect(wrapper.find(contentClass).exists()).toBe(false)
  })

  test.concurrent('modelValue', async () => {
    const wrapper = mount(
      {
        template: `
        <pro-array-form-content
          v-model="form"
          :columns="columns"
        />
      `,
        components: { ProArrayFormContent },
        setup() {
          const form = ref([{ input: 'test' }])
          return { form, columns: ref([...columns]) }
        },
      },
      {
        global: {
          components: { ElInput },
        },
      }
    )

    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find('input').setValue('value')
    expect(wrapper.vm.form[0].input).toBe('value')
  })

  test.concurrent('max', async () => {
    const wrapper = mount(
      {
        template: `
        <pro-array-form-content
          v-model="form"
          :columns="columns"
          :max="1"
        />
      `,
        components: { ProArrayFormContent },
        setup() {
          const form = ref([{ input: 'test' }])
          return { form, columns: ref([...columns]) }
        },
      },
      {
        global: {
          components: { ElInput },
        },
      }
    )

    expect(wrapper.find(addClass).exists()).toBe(false)
    expect(wrapper.find(contentClass).exists()).toBe(true)
    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find(deleteClass).trigger('click')
    expect(wrapper.find(addClass).exists()).toBe(true)
    expect(wrapper.find(contentClass).exists()).toBe(false)
    expect(wrapper.vm.form).toHaveLength(0)
  })
})

describe('ArrayForm', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-array-form />',
      components: { ProArrayForm },
    })

    expect(wrapper.find(addClass).exists()).toBe(true)
    expect(wrapper.find(contentClass).exists()).toBe(false)
    expect(wrapper.find(menuClass).exists()).toBe(true)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find(contentClass).exists()).toBe(false)
  })

  test.concurrent('columns', async () => {
    const wrapper = mount(
      {
        template: `
        <pro-array-form
          v-model="form"
          :columns="columns"
        />
      `,
        components: { ProArrayForm },
        setup() {
          const form = ref()
          return { form, columns: ref([...columns]) }
        },
      },
      {
        global: {
          components: { ElInput },
        },
      }
    )

    expect(wrapper.find(contentClass).exists()).toBe(false)
    expect(wrapper.find(addClass).exists()).toBe(true)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(1)
    expect(wrapper.find(contentClass).exists()).toBe(true)
    expect(
      wrapper.findAll(`${contentClass} ${contentItemClass} .pro-form-item`)
    ).toHaveLength(1)
    expect(
      wrapper
        .find(
          `${contentClass} ${contentItemClass} .pro-form-item .el-form-item__content div`
        )
        .classes()
    ).toContain('el-input')

    await wrapper.vm.columns.push({
      label: 'textarea',
      prop: 'textarea',
      component: 'el-input',
      props: { type: 'textarea' },
    })
    expect(
      wrapper.findAll(`${contentClass} ${contentItemClass} .pro-form-item`)
    ).toHaveLength(2)
    expect(
      wrapper
        .find(
          `${contentClass} ${contentItemClass} .pro-form-item:nth-child(2) .el-form-item__content div`
        )
        .classes()
    ).toContain('el-textarea')

    await wrapper.find(deleteClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(0)
    expect(wrapper.find(contentClass).exists()).toBe(false)
  })

  test.concurrent('modelValue', async () => {
    const wrapper = mount(
      {
        template: `
        <pro-array-form
          v-model="form"
          :columns="columns"
        />
      `,
        components: { ProArrayForm },
        setup() {
          const form = ref([{ input: 'test' }])
          return { form, columns: ref([...columns]) }
        },
      },
      {
        global: {
          components: { ElInput },
        },
      }
    )

    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find('input').setValue('value')
    expect(wrapper.vm.form[0].input).toBe('value')
  })

  test.concurrent('max', async () => {
    const wrapper = mount(
      {
        template: `
        <pro-array-form
          v-model="form"
          :columns="columns"
          :max="1"
        />
      `,
        components: { ProArrayForm },
        setup() {
          const form = ref([{ input: 'test' }])
          return { form, columns: ref([...columns]) }
        },
      },
      {
        global: {
          components: { ElInput },
        },
      }
    )

    expect(wrapper.find(addClass).exists()).toBe(false)
    expect(wrapper.find(contentClass).exists()).toBe(true)
    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find(deleteClass).trigger('click')
    expect(wrapper.find(addClass).exists()).toBe(true)
    expect(wrapper.find(contentClass).exists()).toBe(false)
    expect(wrapper.vm.form).toHaveLength(0)
  })

  test.concurrent('slots', async () => {
    const wrapper = mount(
      {
        template: `
        <pro-array-form>
          <template #default>
            <p class="default">default slot</p>
          </template>
        </pro-array-form>
      `,
        components: { ProArrayForm },
        setup() {
          const form = ref([{ input: 'test' }])
          return { form, columns: ref([...columns]) }
        },
      },
      {
        global: {
          components: { ElInput },
        },
      }
    )

    expect(wrapper.find('.pro-array-form .default').text()).toBe('default slot')
  })
})
