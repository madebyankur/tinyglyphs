import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowBottomIcon = defineComponent({
  name: 'ArrowBottomIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 3V13M8 13L4 9M8 13L12 9","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})