import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CalendarIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 6H12M13.5 2L13.6641 2.1094C14.4987 2.6658 15 3.60249 15 4.60555V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4.60555C1 3.60249 1.5013 2.6658 2.3359 2.1094L2.5 2M7.5 2H8.5M5 1V3M11 1V3" strokeLinecap="round"/>
    </IconBase>
  )
);

CalendarIcon.displayName = "CalendarIcon";