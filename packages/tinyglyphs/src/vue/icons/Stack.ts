import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const StackIcon = defineComponent({
  name: 'StackIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1.75 3.5C1.75 2.67157 2.42157 2 3.25 2H5.25C6.07843 2 6.75 2.67157 6.75 3.5V12.5C6.75 13.3284 6.07843 14 5.25 14H3.25C2.42157 14 1.75 13.3284 1.75 12.5V3.5Z","stroke-linecap":"round"}),
      h('path', {"d":"M9.25 3.5C9.25 2.67157 9.92157 2 10.75 2H12.75C13.5784 2 14.25 2.67157 14.25 3.5V12.5C14.25 13.3284 13.5784 14 12.75 14H10.75C9.92157 14 9.25 13.3284 9.25 12.5V3.5Z","stroke-linecap":"round"})
    ])
  }
})