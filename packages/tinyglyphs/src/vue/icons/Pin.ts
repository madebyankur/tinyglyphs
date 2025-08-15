import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PinIcon = defineComponent({
  name: 'PinIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5.5 10L4.5 15L7.5 11M9 11C6.23858 11 4 8.76142 4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6C14 8.76142 11.7614 11 9 11Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})