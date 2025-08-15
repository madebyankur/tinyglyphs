import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const PasskeyIcon = defineComponent({
  name: 'PasskeyIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M7.75 8.25H6.75C3.98858 8.25 1.75 10.4886 1.75 13.25M12.5 10V13M12.5 13.25H13.5M12.5 11.5H13.5M7 1.75C8.10457 1.75 9 2.64543 9 3.75C9 4.85457 8.10457 5.75 7 5.75C5.89543 5.75 5 4.85457 5 3.75C5 2.64543 5.89543 1.75 7 1.75ZM15 7.25C15 8.63071 13.8807 9.75 12.5 9.75C11.1193 9.75 10 8.63071 10 7.25C10 5.86929 11.1193 4.75 12.5 4.75C13.8807 4.75 15 5.86929 15 7.25Z","stroke-linecap":"round"})
    ])
  }
})