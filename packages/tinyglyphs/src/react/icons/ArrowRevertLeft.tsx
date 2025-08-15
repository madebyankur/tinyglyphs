import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowRevertLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.90991 13H6.90991M2.90991 13L1.40991 9M2.90991 13L4.23588 9.81768C5.9556 5.69035 11.3674 4.72347 14.4099 8" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowRevertLeftIcon.displayName = "ArrowRevertLeftIcon";