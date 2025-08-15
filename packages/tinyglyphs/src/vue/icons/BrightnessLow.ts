import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const BrightnessLowIcon = defineComponent({
  name: 'BrightnessLowIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 1H8.01M12.9512 3.04672L12.9583 3.05379M8 15H8.01M3.05172 12.9462L3.05879 12.9533M15 8H15.01M12.9512 12.9462L12.9583 12.9533M1 8H1.01M3.05172 3.04672L3.05879 3.05379M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})