import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const LogoutIcon = defineComponent({
  name: 'LogoutIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M9 11C9 12.6569 7.65685 14 6 14H4C2.34315 14 1 12.6569 1 11V5C1 3.34315 2.34315 2 4 2H6C7.65685 2 9 3.34315 9 5M5 8H15M15 8L13 6M15 8L13 10","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})