import {
  computed,
  defineComponent,
  h,
  toRefs,
  Transition,
  KeepAlive,
  VNode,
  mergeProps,
} from 'vue'
import { RouterView, RouteLocationNormalizedLoaded } from 'vue-router'
import { ElScrollbar, useAttrs } from 'element-plus'
import {
  useCurrentBreakpoint,
  useShow,
  useSplitReactive,
} from '../composables/index'
import { layoutProps, menuKeys } from './props'
import { ProMenu } from '../Menu/index'

interface RouterViewSlot {
  Component: VNode
  route: RouteLocationNormalizedLoaded
}

export default defineComponent({
  name: 'ProLayout',
  props: layoutProps,
  setup(props, { slots }) {
    const { mode, fixedHeader } = toRefs(props)
    const [menuConfig, keepAliveConfig] = useSplitReactive(props, menuKeys, [
      'include',
      'exclude',
      'max',
    ])
    const attrs = useAttrs()
    const breakpoint = useCurrentBreakpoint()
    const { show, toggleShow } = useShow(props.collapse)
    const collapse = computed(() => {
      return breakpoint.value === 'xs' ? false : show.value
    })

    function closeAside() {
      breakpoint.value === 'xs' && toggleShow()
    }

    function createMenu() {
      const menuSlots = slots.menu
        ? {
            default: (scope: unknown) => slots.menu && slots.menu(scope),
          }
        : undefined

      return h(
        ProMenu,
        mergeProps(attrs.value, menuConfig, {
          collapse: collapse.value,
          onSelect: closeAside,
        }),
        menuSlots,
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
        ],
      )
    }

    function createAside() {
      return h(
        'aside',
        { class: ['pro-aside', show.value && 'aside-collapse'] },
        [
          h('div', { class: 'mask', onClick: toggleShow }),
          h(
            'div',
            {
              class: [
                'pro-aside-wrapper',
                slots.logo && 'with-logo',
                props.collapseTransition && 'with-transition',
              ],
            },
            [
              slots.logo &&
                h(
                  'div',
                  { class: 'pro-aside-logo' },
                  slots.logo({ collapse: collapse.value }),
                ),
              h(ElScrollbar, null, () => createMenu()),
            ],
          ),
        ],
      )
    }

    function createHeader() {
      let list: VNode[] = []

      if (mode.value === 'horizontal' && slots.logo) {
        list.push(
          h(
            'div',
            { class: 'pro-aside-logo' },
            slots.logo({ collapse: undefined }),
          ),
        )
      }
      if (mode.value === 'vertical' && slots['collapse-button']) {
        list = list.concat(
          slots['collapse-button']({ collapse: collapse.value, toggleShow }),
        )
      } else if (mode.value === 'vertical') {
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
        ],
      )
    }

    function createMain() {
      if (slots.default) return slots.default()
      return h(
        RouterView,
        {},
        {
          default: ({ Component, route }: RouterViewSlot) => {
            const withKeepAlive = props.keepAlive
              ? h(KeepAlive, keepAliveConfig, Component)
              : Component

            return props.transition
              ? h(
                  Transition,
                  {
                    mode: 'out-in',
                    appear: true,
                    name: route?.meta?.transition ?? props.transition,
                  },
                  () => withKeepAlive,
                )
              : withKeepAlive
          },
        },
      )
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
          ],
        },
        createDefault(),
      )
  },
})
