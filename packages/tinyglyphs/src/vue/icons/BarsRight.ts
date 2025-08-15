import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const BarsRightIcon = defineComponent({
  name: 'BarsRightIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 4H15M1 8H15M9 12H15","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})