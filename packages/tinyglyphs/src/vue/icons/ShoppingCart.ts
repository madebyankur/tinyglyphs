import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ShoppingCartIcon = defineComponent({
  name: 'ShoppingCartIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M4 3L4.0306 2.93879C4.47598 2.04804 3.82825 1 2.83237 1C2.29941 1 1.78828 1.21172 1.41143 1.58857L1 2M10.5 8.5H10.51M11 6H11.01M8.25 6H8.26M5.5 6H5.51M5 8.5H5.01M7.75 8.5H7.76M15 3L13.5442 9.18712C13.2253 10.5423 12.0161 11.5 10.624 11.5H2.8939C1.92663 11.5 1.21223 10.598 1.43378 9.65644L2.7279 4.15644C2.88733 3.47887 3.49194 3 4.18802 3H15ZM3.25 15C2.83579 15 2.5 14.6642 2.5 14.25C2.5 13.8358 2.83579 13.5 3.25 13.5C3.66421 13.5 4 13.8358 4 14.25C4 14.6642 3.66421 15 3.25 15ZM9.25 15C8.83579 15 8.5 14.6642 8.5 14.25C8.5 13.8358 8.83579 13.5 9.25 13.5C9.66421 13.5 10 13.8358 10 14.25C10 14.6642 9.66421 15 9.25 15Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})