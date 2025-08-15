import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const BrowserIcon = defineComponent({
  name: 'BrowserIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 5H4.01M6.5 5H6.51M9 5H9.01M4 14H12C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2H4C2.34315 2 1 3.34315 1 5V11C1 12.6569 2.34315 14 4 14Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})