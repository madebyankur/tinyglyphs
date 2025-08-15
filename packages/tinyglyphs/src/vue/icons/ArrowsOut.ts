import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowsOutIcon = defineComponent({
  name: 'ArrowsOutIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M10 6L15 1M15 1V5M15 1H11M1 1H5M1 1L6 6M1 1V5M1 15V11M1 15H5M1 15L6 10M15 11V15M15 15H11M15 15L10 10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})