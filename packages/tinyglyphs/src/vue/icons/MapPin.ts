import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const MapPinIcon = defineComponent({
  name: 'MapPinIcon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      h('path', {"d":"M11.9483 11.6157L8.75722 14.351C8.3215 14.7244 7.67853 14.7244 7.2428 14.351L4.05171 11.6157C2.20181 10.0301 1.47994 7.49165 2.21869 5.16988C4.01213 -0.466661 11.9879 -0.466662 13.7813 5.16988C14.5201 7.49165 13.7982 10.0301 11.9483 11.6157Z"}),
      h('path', {"d":"M5.50001 6.5C5.50001 5.11929 6.6193 4 8.00001 4C9.38072 4 10.5 5.11929 10.5 6.5C10.5 7.88071 9.38072 9 8.00001 9C6.6193 9 5.50001 7.88071 5.50001 6.5Z"})
    ])
  }
})