import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const WifiIcon = defineComponent({
  name: 'WifiIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 14H8.01M1 6C4.75156 1.98047 11.177 1.95352 14.8995 6M3 8.5C5.84249 5.94176 10.1575 5.94176 13 8.5M6 11C7.10457 9.89543 8.89543 9.89543 10 11","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})