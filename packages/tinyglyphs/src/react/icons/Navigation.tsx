import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const NavigationIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5208 2.03554L1.5 6.98529L6.44975 9.10661L8.57107 14.0564L13.5208 2.03554Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

NavigationIcon.displayName = "NavigationIcon";