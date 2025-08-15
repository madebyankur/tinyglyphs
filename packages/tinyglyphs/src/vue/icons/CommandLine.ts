import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CommandLineIcon = defineComponent({
  name: 'CommandLineIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4.5 4.5L6.5 6.5L4.5 8.5M8.5 8.5H11.5M4 15H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})