import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const LinkIcon = defineComponent({
  name: 'LinkIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M9.41421 3.75736L8 2.34314C6.4379 0.781046 3.90524 0.781045 2.34314 2.34314C0.781046 3.90524 0.781045 6.4379 2.34314 8L3.75736 9.41421M12.2426 6.58578L13.6569 8C15.2189 9.56209 15.2189 12.0948 13.6569 13.6569C12.0948 15.2189 9.56209 15.2189 8 13.6569L6.58578 12.2426M5.17157 5.17157L10.8284 10.8284","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})