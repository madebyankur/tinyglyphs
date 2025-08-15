import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CollapseLeftIcon = defineComponent({
  name: 'CollapseLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M6 8H14M6 8L10 4M6 8L10 12M3 3V13","stroke-linecap":"round"})
    ])
  }
})