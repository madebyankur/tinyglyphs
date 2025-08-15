import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ShareIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 1V11M8 1L10 3M8 1L6 3M12 5C13.6569 5 15 6.34315 15 8V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V8C1 6.34315 2.34315 5 4 5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ShareIcon.displayName = "ShareIcon";