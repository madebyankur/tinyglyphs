import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowRightIcon = defineComponent({
  name: 'ArrowRightIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M3 8H13M13 8L9 4M13 8L9 12","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})