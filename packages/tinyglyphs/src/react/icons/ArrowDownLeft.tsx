import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowDownLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4L4 12M4 12V6M4 12H10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowDownLeftIcon.displayName = "ArrowDownLeftIcon";