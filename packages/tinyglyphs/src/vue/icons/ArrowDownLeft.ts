import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowDownLeftIcon = defineComponent({
  name: 'ArrowDownLeftIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M12 4L4 12M4 12V6M4 12H10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})