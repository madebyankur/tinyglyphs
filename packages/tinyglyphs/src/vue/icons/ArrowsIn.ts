import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowsInIcon = defineComponent({
  name: 'ArrowsInIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M10 6L15 1M10 6V3M10 6H13M1 1L6 6M6 6H3M6 6V3M1 15L6 10M6 10V13M6 10H3M15 15L10 10M10 10H13M10 10V13","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})