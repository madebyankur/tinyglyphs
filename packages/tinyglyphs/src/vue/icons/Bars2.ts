import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const Bars2Icon = defineComponent({
  name: 'Bars2Icon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 5H15M1 11H15","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})