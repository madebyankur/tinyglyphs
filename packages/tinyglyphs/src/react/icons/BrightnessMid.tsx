import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BrightnessMidIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 1V1.5M12.9497 3.05025L12.5962 3.40381M8 14.5V15M3.40381 12.5962L3.05025 12.9497M14.5 8H15M12.5962 12.5962L12.9497 12.9497M1 8H1.5M3.05025 3.05025L3.40381 3.40381M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BrightnessMidIcon.displayName = "BrightnessMidIcon";