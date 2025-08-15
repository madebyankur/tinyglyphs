import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowDownUpIcon = defineComponent({
  name: 'ArrowDownUpIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M12 12V2M12 2L9 5M12 2L15 5M4 4V14M4 14L1 11M4 14L7 11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})