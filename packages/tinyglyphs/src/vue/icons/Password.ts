import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PasswordIcon = defineComponent({
  name: 'PasswordIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4.5 8H4.51M8 8H8.01M11.5 8H11.51M4 3H12C13.6569 3 15 4.34315 15 6V10C15 11.6569 13.6569 13 12 13H4C2.34315 13 1 11.6569 1 10V6C1 4.34315 2.34315 3 4 3Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})