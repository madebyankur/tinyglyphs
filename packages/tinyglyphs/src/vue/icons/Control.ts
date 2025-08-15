import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ControlIcon = defineComponent({
  name: 'ControlIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 4H4.01M12 12H12.01M4 7H12C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1H4C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7ZM4 15H12C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9H4C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})