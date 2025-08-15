import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SendIcon = defineComponent({
  name: 'SendIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M13.5208 2.03553L1.50001 6.98528L6.44976 9.1066M13.5208 2.03553L8.57108 14.0563L6.44976 9.1066M13.5208 2.03553L6.44976 9.1066","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})