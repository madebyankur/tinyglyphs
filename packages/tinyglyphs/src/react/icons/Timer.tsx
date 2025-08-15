import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const TimerIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 1H9M8 6V8M8 15C4.68629 15 2 12.3137 2 9C2 5.68629 4.68629 3 8 3C11.3137 3 14 5.68629 14 9C14 12.3137 11.3137 15 8 15Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

TimerIcon.displayName = "TimerIcon";