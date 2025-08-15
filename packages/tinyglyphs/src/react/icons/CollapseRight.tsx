import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CollapseRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 3V13M2 8H10M10 8L6 4M10 8L6 12" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

CollapseRightIcon.displayName = "CollapseRightIcon";