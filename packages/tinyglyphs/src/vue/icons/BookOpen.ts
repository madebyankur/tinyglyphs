import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const BookOpenIcon = defineComponent({
  name: 'BookOpenIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M8 15V6.61205C8 4.17785 5.84405 2.308 3.43432 2.65225L1 3.00001V13.6582C1 14.2199 1.63484 14.5466 2.09187 14.2201C3.53242 13.1911 5.46758 13.1911 6.90813 14.2201L8 15ZM8 15V5.61205C8 3.17785 10.156 1.308 12.5657 1.65225L15 2.00001V11.9401C15 12.4712 14.4916 12.8547 13.9808 12.7088C12.4319 12.2663 10.7642 12.6307 9.54104 13.6791L8 15ZM8 6.00001V14","stroke-linecap":"round","stroke-linejoin":"round"})
    ])
  }
})