import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ChevronUpDownIcon = defineComponent({
  name: 'ChevronUpDownIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5 6L8 3L11 6M5 10L8 13L11 10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})