import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const LoginIcon = defineComponent({
  name: 'LoginIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M10 11C10 12.6569 8.65685 14 7 14H4C2.34315 14 1 12.6569 1 11V5C1 3.34315 2.34315 2 4 2H7C8.65685 2 10 3.34315 10 5M5 8H15M5 8L7 6M5 8L7 10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})