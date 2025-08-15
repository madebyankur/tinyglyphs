import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const DatabaseIcon = defineComponent({
  name: 'DatabaseIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M14 4C14 5.65685 11.3137 7 8 7C4.68629 7 2 5.65685 2 4M14 4C14 2.34315 11.3137 1 8 1C4.68629 1 2 2.34315 2 4M14 4V12C14 13.6569 11.3137 15 8 15C4.68629 15 2 13.6569 2 12V4M14 8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8"})
    ])
  }
})