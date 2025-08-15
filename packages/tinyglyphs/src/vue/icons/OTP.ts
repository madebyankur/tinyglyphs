import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const OTPIcon = defineComponent({
  name: 'OTPIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 9.5L4 6.5M6.5 9.5L9.5 6.5M12 9.5L15 6.5M1 6.5L4 9.5M6.5 6.5L9.5 9.5M12 6.5L15 9.5","stroke-linecap":"round"})
    ])
  }
})