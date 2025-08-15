import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowUpDownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 12V2M4 2L1 5M4 2L7 5M12 4V14M12 14L9 11M12 14L15 11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowUpDownIcon.displayName = "ArrowUpDownIcon";