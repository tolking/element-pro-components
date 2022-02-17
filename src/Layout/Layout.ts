import {
  Component,
  computed,
  DefineComponent,
  defineComponent,
  h,
  toRefs,
  resolveDynamicComponent,
  Transition,
  KeepAlive,
  VNode,
} from 'vue'
import { RouterView, RouteRecordRaw } from 'vue-router'
import { ElScrollbar } from 'element-plus'
import { useScreenSize, useShow } from '../composables/index'
import { objectOmit } from '../utils/index'
import props from './props'
import { ProMenu } from '../Menu/index'

interface RouterViewSlot {
  Component: Component
  route: RouteRecordRaw
}

export default defineComponent({
  name: 'ProLayout',
  props,
  setup(props, { slots }) {
    const { mode, fixedHeader, fixedMain } = toRefs(props)
    const size = useScreenSize()
    const { show, toggleShow } = useShow(props.collapse)
    const collapse = computed(() => {
      return size.value === 'xs' ? false : show.value
    })

    function createMenu() {
      const config = objectOmit(props, [
        'fixedHeader',
        'fixedMain',
        'transition',
      ])
      const menuSlots = slots.menu
        ? {
            default: (scope: unknown) => slots.menu && slots.menu(scope),
          }
        : undefined

      return h(
        ProMenu,
        {
          ...config,
          collapse: collapse.value,
        },
        menuSlots
      )
    }

    function createMenuButton() {
      return h(
        'span',
        {
          class: ['header-fold-btn', collapse.value && 'is-active'],
          onClick: toggleShow,
        },
        [
          h('span', { class: 'line' }),
          h('span', { class: 'line' }),
          h('span', { class: 'line' }),
        ]
      )
    }

    function createAside() {
      return h(
        'aside',
        { class: ['pro-aside', show.value && 'aside-collapse'] },
        [
          h('div', { class: 'mask', onClick: toggleShow }),
          h('div', { class: 'pro-aside-wrapper' }, [
            slots.logo &&
              h(
                'div',
                { class: 'pro-aside-logo' },
                slots.logo({ collapse: collapse.value })
              ),
            h(ElScrollbar, null, () => createMenu()),
          ]),
        ]
      )
    }

    function createHeader() {
      let list: VNode[] = []

      if (mode.value === 'horizontal' && slots.logo) {
        list.push(
          h(
            'div',
            { class: 'pro-aside-logo' },
            slots.logo({ collapse: undefined })
          )
        )
      }
      if (mode.value === 'vertical') {
        list.push(createMenuButton())
      } else {
        list.push(createMenu())
      }
      if (slots['header-left']) {
        list = list.concat(slots['header-left']())
      }

      return h(
        'header',
        { class: ['pro-header', fixedHeader.value && 'fixed-header'] },
        [
          h('div', { class: 'header-content' }, [
            h('div', { class: 'header-slot' }, list),
            slots['header-right'] &&
              h('div', { class: 'header-slot' }, slots['header-right']()),
          ]),
          slots['header-bottom'] && slots['header-bottom'](),
        ]
      )
    }

    function createDefaultMain({ Component, route }: RouterViewSlot) {
      const defaultMain = h(
        resolveDynamicComponent(Component) as DefineComponent
      )

      return [
        slots['main-top'] && slots['main-top'](),
        route.meta?.keepAlive ? h(KeepAlive, null, defaultMain) : defaultMain,
        slots['main-bottom'] && slots['main-bottom'](),
      ]
    }

    function createMain() {
      return h(RouterView, null, {
        default: (scope: RouterViewSlot) =>
          h(
            Transition,
            {
              mode: 'out-in',
              name: props.transition,
            },
            () => {
              if (fixedMain.value) {
                return h(ElScrollbar, { class: 'pro-main' }, () =>
                  createDefaultMain(scope)
                )
              } else {
                return h('div', { class: 'pro-main' }, createDefaultMain(scope))
              }
            }
          ),
      })
    }

    function createDefault() {
      let list = [createHeader(), createMain()]

      if (slots.footer) {
        list = list.concat(slots.footer())
      }
      if (mode.value === 'vertical') {
        return [createAside(), h('section', { class: 'pro-container' }, list)]
      } else {
        return list
      }
    }

    return () =>
      h(
        'section',
        {
          class: [
            'pro-layout',
            mode.value === 'vertical' ? 'layout-aside' : 'layout-topmenu',
            fixedMain.value && 'fixed-main',
          ],
        },
        createDefault()
      )
  },
})
