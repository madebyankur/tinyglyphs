import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ServerIcon = defineComponent({
  name: 'ServerIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M12 9H4M12 9C13.6569 9 15 7.65685 15 6C15 5.1115 14.6137 4.31321 14 3.76389M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12C1 10.3431 2.34315 9 4 9M4 9C2.34315 9 1 7.65685 1 6C1 5.1115 1.38625 4.31321 2 3.76389M2 3.76389C2.53076 3.28885 3.23165 3 4 3H12C12.7684 3 13.4692 3.28885 14 3.76389M2 3.76389L3.60674 1.98756C4.17549 1.35877 4.98375 1 5.83161 1H10.1684C11.0162 1 11.8245 1.35876 12.3933 1.98755L14 3.76389M12 6H12.01M12 12H12.01","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})