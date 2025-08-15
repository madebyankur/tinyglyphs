import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CircleFilledIcon = defineComponent({
  name: 'CircleFilledIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M3.90692 8L7.90692 4M4.90692 11L10.9069 5M7.90692 12L11.9069 8M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z","stroke-linecap":"round"})
    ])
  }
})