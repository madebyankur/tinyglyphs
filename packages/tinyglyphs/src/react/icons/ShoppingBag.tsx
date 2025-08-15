import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ShoppingBagIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 5.5V3.5C10.5 2.11929 9.38072 1 8.00001 1C6.6193 1 5.50001 2.11929 5.50001 3.5V5.5M3.00001 4H2.93337C2.13143 4 1.47134 4.63077 1.43492 5.43189L1.14256 11.8638C1.0649 13.5723 2.42914 15 4.13947 15H11.8605C13.5709 15 14.9351 13.5723 14.8575 11.8638L14.5651 5.43189C14.5287 4.63077 13.8686 4 13.0666 4H13M8.00001 5H8.01001" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ShoppingBagIcon.displayName = "ShoppingBagIcon";