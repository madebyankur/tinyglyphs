import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PlusIcon = defineComponent({
  name: 'PlusIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 2V14M14 8L2 8","stroke-linecap":"round"})
    ])
  }
})