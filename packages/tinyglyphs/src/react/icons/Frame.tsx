import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const FrameIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 1H4C2.34315 1 1 2.34315 1 4V5M15 11V12C15 13.6569 13.6569 15 12 15H11M11 1H12C13.6569 1 15 2.34315 15 4V5M1 11V12C1 13.6569 2.34315 15 4 15H5" strokeLinecap="round"/>
    </IconBase>
  )
);

FrameIcon.displayName = "FrameIcon";