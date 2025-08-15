import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const PanelBottomIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <g clipPath="url(#clip0_261_2741)">
<path d="M4 10H12M6 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H6H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H6Z" strokeWidth="1.5" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_261_2741">
<rect width="16" height="16"/>
</clipPath>
</defs>
    </IconBase>
  )
);

PanelBottomIcon.displayName = "PanelBottomIcon";