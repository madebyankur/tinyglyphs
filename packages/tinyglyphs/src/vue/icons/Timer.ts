import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const TimerIcon = defineComponent({
  name: 'TimerIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M7 1H9M8 6V8M8 15C4.68629 15 2 12.3137 2 9C2 5.68629 4.68629 3 8 3C11.3137 3 14 5.68629 14 9C14 12.3137 11.3137 15 8 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})