import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowUpDownIcon = defineComponent({
  name: 'ArrowUpDownIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 12V2M4 2L1 5M4 2L7 5M12 4V14M12 14L9 11M12 14L15 11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})