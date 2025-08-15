import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const TerminalIcon = defineComponent({
  name: 'TerminalIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M3 4L7 8L3 12M9 12H13","stroke-linecap":"round"})
    ])
  }
})