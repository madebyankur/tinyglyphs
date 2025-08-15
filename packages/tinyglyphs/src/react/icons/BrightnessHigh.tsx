import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BrightnessHighIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 1V2M8 14V15M14 8H15M1 8H2M12.9497 3.05025L12.2426 3.75736M3.75736 12.2426L3.05025 12.9497M12.2426 12.2426L12.9497 12.9497M3.05025 3.05025L3.75736 3.75736M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BrightnessHighIcon.displayName = "BrightnessHighIcon";