import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const AaIcon = defineComponent({
  name: 'AaIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M14.5 6.75002V10.5429C14.5 10.9957 14.6799 11.4299 15 11.75M1 11.75L1.96 9.35002M1.96 9.35002L3.73576 4.91062C3.90339 4.49155 4.49661 4.49155 4.66424 4.91062L6.44 9.35002M1.96 9.35002H6.44M6.44 9.35002L7.4 11.75M12 11.75C13.3807 11.75 14.5 10.6307 14.5 9.25002C14.5 7.86931 13.3807 6.75002 12 6.75002C10.6193 6.75002 9.5 7.86931 9.5 9.25002C9.5 10.6307 10.6193 11.75 12 11.75Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})