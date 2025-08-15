import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const RSSIcon = defineComponent({
  name: 'RSSIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 1C8.73199 1 15 7.26801 15 15M1 5.5C6.24671 5.5 10.5 9.75329 10.5 15M1 10C3.76142 10 6 12.2386 6 15M1 15H1.01","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})