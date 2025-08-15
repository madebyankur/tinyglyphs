import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ConnectionIcon = defineComponent({
  name: 'ConnectionIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 8H8.01M4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})