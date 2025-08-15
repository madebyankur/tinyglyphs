import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CheckIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 9L5 13L14 3" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

CheckIcon.displayName = "CheckIcon";