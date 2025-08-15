import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const XIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 14L14 2M14 14L2 2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

XIcon.displayName = "XIcon";