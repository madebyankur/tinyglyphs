import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ReactIcon = defineComponent({
  name: 'ReactIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 8H8.01M15 8C15 9.65685 11.866 11 8 11C4.13401 11 1 9.65685 1 8C1 6.34315 4.13401 5 8 5C11.866 5 15 6.34315 15 8ZM11.5 14.0622C10.0651 14.8906 7.33492 12.848 5.40192 9.5C3.46893 6.15195 3.06512 2.76625 4.5 1.93782C5.93488 1.10939 8.66508 3.15195 10.5981 6.5C12.5311 9.84805 12.9349 13.2338 11.5 14.0622ZM4.49992 14.0621C3.06504 13.2337 3.46885 9.848 5.40184 6.49995C7.33484 3.1519 10.065 1.10935 11.4999 1.93777C12.9348 2.7662 12.531 6.1519 10.598 9.49995C8.665 12.848 5.9348 14.8906 4.49992 14.0621Z","stroke-linecap":"round"})
    ])
  }
})