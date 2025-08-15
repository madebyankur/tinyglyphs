import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const LockOpenIcon = defineComponent({
  name: 'LockOpenIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M5.5 6V3C5.5 1.89543 6.39543 1 7.5 1C8.60457 1 9.5 1.89543 9.5 3M2 12V9C2 7.34315 3.34315 6 5 6H11C12.6569 6 14 7.34315 14 9V12C14 13.6569 12.6569 15 11 15H5C3.34315 15 2 13.6569 2 12ZM8 12C7.17157 12 6.5 11.3284 6.5 10.5C6.5 9.67157 7.17157 9 8 9C8.82843 9 9.5 9.67157 9.5 10.5C9.5 11.3284 8.82843 12 8 12Z","stroke-linecap":"round"})
    ])
  }
})