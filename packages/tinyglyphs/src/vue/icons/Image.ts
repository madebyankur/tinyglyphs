import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ImageIcon = defineComponent({
  name: 'ImageIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 15L7.58114 13.7434C6.6369 10.9107 3.98595 9 1 9M6.5 11.5L7.29758 10.4745C9.00269 8.28225 11.6244 7 14.4018 7H15M1 4V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H4C2.34315 1 1 2.34315 1 4ZM7.5 5.5C7.5 6.60457 6.60457 7.5 5.5 7.5C4.39543 7.5 3.5 6.60457 3.5 5.5C3.5 4.39543 4.39543 3.5 5.5 3.5C6.60457 3.5 7.5 4.39543 7.5 5.5Z","stroke-linecap":"round"})
    ])
  }
})