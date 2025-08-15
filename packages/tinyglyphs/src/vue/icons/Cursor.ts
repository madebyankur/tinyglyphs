import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CursorIcon = defineComponent({
  name: 'CursorIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 9L5 12V1L12 9H8ZM8 9L10 14","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})