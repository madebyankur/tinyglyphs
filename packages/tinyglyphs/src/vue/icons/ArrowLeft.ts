import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowLeftIcon = defineComponent({
  name: 'ArrowLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M3 8H13M3 8L7 4M3 8L7 12","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})