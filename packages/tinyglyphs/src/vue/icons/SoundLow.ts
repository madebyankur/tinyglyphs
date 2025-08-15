import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const SoundLowIcon = defineComponent({
  name: 'SoundLowIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M1 8.62426V7.37574C1 6.61594 1.61594 6 2.37574 6C2.77245 6 3.14985 5.82875 3.41108 5.53019L6.05179 2.51224C6.33662 2.18672 6.74811 2 7.18065 2H8V14H7.18065C6.74811 14 6.33662 13.8133 6.05179 13.4878L3.41108 10.4698C3.14985 10.1713 2.77245 10 2.37574 10C1.61594 10 1 9.38406 1 8.62426Z","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})