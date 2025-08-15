import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const MessageIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 4.5H11M5 7.5H8M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V8C15 9.65685 13.6569 11 12 11H5.69857C4.64478 11 3.66826 11.5529 3.12609 12.4565L2.85749 12.9042C2.33568 13.7739 1 13.4039 1 12.3897V4Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

MessageIcon.displayName = "MessageIcon";