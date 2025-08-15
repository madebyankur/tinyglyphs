import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CollapseRightIcon = defineComponent({
  name: 'CollapseRightIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M13 3V13M2 8H10M10 8L6 4M10 8L6 12","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})