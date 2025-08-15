import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ActivityIcon = defineComponent({
  name: 'ActivityIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 8H3.2457C3.69218 8 4.08456 7.70402 4.20722 7.27472L6 1L10 15L11.7928 8.72528C11.9154 8.29598 12.3078 8 12.7543 8H15","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})