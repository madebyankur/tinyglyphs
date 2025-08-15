import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const OTPIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 9.5L4 6.5M6.5 9.5L9.5 6.5M12 9.5L15 6.5M1 6.5L4 9.5M6.5 6.5L9.5 9.5M12 6.5L15 9.5" strokeLinecap="round"/>
    </IconBase>
  )
);

OTPIcon.displayName = "OTPIcon";