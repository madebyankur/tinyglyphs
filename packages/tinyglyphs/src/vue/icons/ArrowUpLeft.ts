import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowUpLeftIcon = defineComponent({
  name: 'ArrowUpLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M12 12L4 4M4 4H10M4 4V10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})