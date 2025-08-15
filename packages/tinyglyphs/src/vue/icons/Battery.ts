import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const BatteryIcon = defineComponent({
  name: 'BatteryIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M15 7V8.5M4 12H10C11.6569 12 13 10.6569 13 9V7C13 5.34315 11.6569 4 10 4H4C2.34315 4 1 5.34315 1 7V9C1 10.6569 2.34315 12 4 12Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})