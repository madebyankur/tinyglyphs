import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const NavigationIcon = defineComponent({
  name: 'NavigationIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M13.5208 2.03554L1.5 6.98529L6.44975 9.10661L8.57107 14.0564L13.5208 2.03554Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})