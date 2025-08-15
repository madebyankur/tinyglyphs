import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowRevertRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.9099 13H8.90991M12.9099 13L14.4099 9M12.9099 13L11.5839 9.81768C9.86422 5.69035 4.4524 4.72347 1.40991 8" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowRevertRightIcon.displayName = "ArrowRevertRightIcon";