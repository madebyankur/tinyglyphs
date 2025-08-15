import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PlayIcon = defineComponent({
  name: 'PlayIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M3 4.52681V11.4732C3 12.6118 4.21872 13.3352 5.21828 12.79L11.5858 9.31684C12.6281 8.74832 12.6281 7.25168 11.5858 6.68316L5.21828 3.20997C4.21872 2.66475 3 3.38822 3 4.52681Z","stroke-linejoin":"round"})
    ])
  }
})