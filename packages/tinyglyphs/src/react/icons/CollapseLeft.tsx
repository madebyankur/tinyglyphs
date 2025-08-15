import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const CollapseLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 8H14M6 8L10 4M6 8L10 12M3 3V13" strokeLinecap="round"/>
    </IconBase>
  )
);

CollapseLeftIcon.displayName = "CollapseLeftIcon";