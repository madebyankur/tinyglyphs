import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CodeIcon = defineComponent({
  name: 'CodeIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M6.5 6L4.5 8L6.5 10M9.5 6L11.5 8L9.5 10M4 15H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})