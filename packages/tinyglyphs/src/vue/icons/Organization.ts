import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const OrganizationIcon = defineComponent({
  name: 'OrganizationIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M11 15H12C13.6569 15 15 13.6569 15 12V7C15 5.34315 13.6569 4 12 4M4 5H7M4 8H7M4 11H7M12 8H12.01M12 11H12.01M1 4V12C1 13.6569 2.34315 15 4 15H7C8.65685 15 10 13.6569 10 12V4C10 2.34315 8.65685 1 7 1H4C2.34315 1 1 2.34315 1 4Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})