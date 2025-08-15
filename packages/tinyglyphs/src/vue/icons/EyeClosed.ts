import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const EyeClosedIcon = defineComponent({
  name: 'EyeClosedIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 6C5.83287 8.41644 10.1671 8.41644 15 6M8 12H8.01M11.5 11.5H11.51M4.5 11.5H4.51M1 10H1.01M15 10H15.01","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})