import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const CheckIcon = defineComponent({
  name: 'CheckIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M2 9L5 13L14 3","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})