import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowReturnLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 6H11C13.2091 6 15 7.79086 15 10C15 12.2091 13.2091 14 11 14H9M1 6L5 2M1 6L5 10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowReturnLeftIcon.displayName = "ArrowReturnLeftIcon";