import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ArrowRevertRightIcon = defineComponent({
  name: 'ArrowRevertRightIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M12.9099 13H8.90991M12.9099 13L14.4099 9M12.9099 13L11.5839 9.81768C9.86422 5.69035 4.4524 4.72347 1.40991 8","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})