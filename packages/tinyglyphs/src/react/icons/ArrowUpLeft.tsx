import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowUpLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12L4 4M4 4H10M4 4V10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowUpLeftIcon.displayName = "ArrowUpLeftIcon";