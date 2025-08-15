import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const PlayAltIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4Z" strokeLinejoin="round"/>
<path d="M6 5V11L11 8L6 5Z" strokeLinejoin="round"/>
    </IconBase>
  )
);

PlayAltIcon.displayName = "PlayAltIcon";