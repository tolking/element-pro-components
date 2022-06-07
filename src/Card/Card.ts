import { computed, defineComponent, h, mergeProps } from 'vue'
import { useCol, useRow } from '../composables/index'
import { findNodeByName } from '../utils/index'
import { cardProps } from './props'

export default defineComponent({
  name: 'ProCard',
  props: cardProps,
  setup(props, { slots }) {
    const { rowStyle, rowClass } = useRow(props)
    const { colStyle, colClass, gutter } = useCol(props)
    const defaultSlot = computed(() => slots.default && slots.default())
    const isNestedCard = computed(() => {
      return !!findNodeByName(defaultSlot.value, 'ProCard')
    })
    const isCol = computed(() => {
      const regExp = /^el-col,el-col-24(,is-guttered)?$/
      return !(!props.span && regExp.test(colClass.value.join()))
    })

    function createHeader() {
      if (slots.header || props.header) {
        return h(
          'div',
          { class: 'pro-card__header' },
          slots.header ? slots.header() : props.header
        )
      } else {
        return undefined
      }
    }

    function createBody() {
      return h(
        'div',
        mergeProps(
          { style: props.bodyStyle },
          {
            class: [
              'pro-card__body',
              isNestedCard.value && rowClass.value,
              isNestedCard.value &&
                props.direction &&
                `is-direction-${props.direction}`,
            ],
            style: isNestedCard.value && rowStyle.value,
          }
        ),
        defaultSlot.value
      )
    }

    function createDefault() {
      return h(
        'div',
        {
          class: [
            'pro-card',
            props.ghost && 'is-ghost',
            isNestedCard.value && props.split && 'is-split',
            props.shadow && `is-${props.shadow}-shadow`,
          ],
          style: !isCol.value &&
            gutter.value && {
              marginLeft: `${gutter.value / 2}px`,
              marginRight: `${gutter.value / 2}px`,
            },
        },
        [createHeader(), createBody()]
      )
    }

    return () => {
      if (isCol.value) {
        return h(
          'div',
          {
            class: colClass.value,
            style: colStyle.value,
          },
          createDefault()
        )
      } else {
        return createDefault()
      }
    }
  },
})
