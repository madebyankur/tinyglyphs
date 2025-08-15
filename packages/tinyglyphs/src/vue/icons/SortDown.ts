import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SortDownIcon = defineComponent({
  name: 'SortDownIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5 1V15M5 15L1 11M5 15L9 11M8 2H15M8 5H15M8 8H11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})