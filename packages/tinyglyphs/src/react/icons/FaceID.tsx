import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const FaceIDIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 4.5V4C1 2.34315 2.34315 1 4 1H4.5M1 11.5V12C1 13.6569 2.34315 15 4 15H4.5M11.5 15H12C13.6569 15 15 13.6569 15 12V11.5M15 4.5V4C15 2.34315 13.6569 1 12 1H11.5M5 5.41992V6.91992M11 5.41992V6.91992M8 6.41992V8.41992C8 8.69606 7.77614 8.91992 7.5 8.91992M6 11C6.82405 12.6481 9.17595 12.6481 10 11" strokeLinecap="round"/>
    </IconBase>
  )
);

FaceIDIcon.displayName = "FaceIDIcon";