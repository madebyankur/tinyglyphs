import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const OpticIDIcon = defineComponent({
  name: 'OpticIDIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8.00001 8.00001H8.01001M7.17418 5.16657C5.87795 5.51389 4.95064 6.72239 4.95064 8.06434M7.17418 10.9621C7.68285 11.0984 8.21843 11.0984 8.7271 10.9621M10.8484 7.28789C10.9847 7.79655 10.9847 8.33214 10.8484 8.8408M14.858 7.47247C14.951 7.81801 14.951 8.18201 14.858 8.52755C12.9713 15.5353 3.02873 15.5353 1.14204 8.52755C1.04901 8.18201 1.04901 7.81801 1.14204 7.47247C3.02873 0.464743 12.9713 0.464742 14.858 7.47247Z","stroke-linecap":"round"})
    ])
  }
})