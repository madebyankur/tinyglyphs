import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ExternalIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 8V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4C1 2.34315 2.34315 1 4 1H8M7 9L15 1M15 1H11M15 1V5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ExternalIcon.displayName = "ExternalIcon";