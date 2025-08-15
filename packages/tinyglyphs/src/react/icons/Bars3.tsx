import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Bars3Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 4H15M1 8H15M1 12H15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

Bars3Icon.displayName = "Bars3Icon";