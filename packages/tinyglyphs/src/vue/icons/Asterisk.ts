import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const AsteriskIcon = defineComponent({
  name: 'AsteriskIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 7.99999H15M8 15V1M3 13L13 3M3 3L13 13","stroke-linecap":"round"})
    ])
  }
})