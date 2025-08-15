import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowDownRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 4L12 12M12 12V6M12 12H6" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowDownRightIcon.displayName = "ArrowDownRightIcon";