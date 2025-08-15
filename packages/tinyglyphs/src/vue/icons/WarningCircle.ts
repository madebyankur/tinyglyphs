import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const WarningCircleIcon = defineComponent({
  name: 'WarningCircleIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 5V8M8 11H8.01M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z","stroke-linecap":"round"})
    ])
  }
})