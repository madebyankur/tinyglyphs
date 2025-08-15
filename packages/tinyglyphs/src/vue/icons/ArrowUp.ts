import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowUpIcon = defineComponent({
  name: 'ArrowUpIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 13V3M8 3L4 7M8 3L12 7","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})