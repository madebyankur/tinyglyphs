import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const DatabaseTimeIcon = defineComponent({
  name: 'DatabaseTimeIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M14 4C14 5.65685 11.3137 7 8 7C4.68629 7 2 5.65685 2 4M14 4C14 2.34315 11.3137 1 8 1C4.68629 1 2 2.34315 2 4M14 4V7M2 4V12C2 13.4865 4.16229 14.7205 7 14.9585M6 10.8293C3.66962 10.4175 2 9.30622 2 8M12 11V12.5L13 13M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})