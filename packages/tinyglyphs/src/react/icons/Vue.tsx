import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const VueIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 1L8 15L15 1M4.5 1L8 8L11.5 1" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

VueIcon.displayName = "VueIcon";