import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowDownRightIcon = defineComponent({
  name: 'ArrowDownRightIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 4L12 12M12 12V6M12 12H6","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})