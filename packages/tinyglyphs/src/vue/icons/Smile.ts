import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SmileIcon = defineComponent({
  name: 'SmileIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M6 10C6.82405 11.6481 9.17595 11.6481 10 10M10 6H10.01M6 6H6.01M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})