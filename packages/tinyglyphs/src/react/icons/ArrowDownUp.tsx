import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowDownUpIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12V2M12 2L9 5M12 2L15 5M4 4V14M4 14L1 11M4 14L7 11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowDownUpIcon.displayName = "ArrowDownUpIcon";