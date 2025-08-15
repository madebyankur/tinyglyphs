import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SortUpIcon = defineComponent({
  name: 'SortUpIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5 15V1M5 1L1 5M5 1L9 5M8 8H15M8 11H15M8 14H11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})