import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const RSSIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 1C8.73199 1 15 7.26801 15 15M1 5.5C6.24671 5.5 10.5 9.75329 10.5 15M1 10C3.76142 10 6 12.2386 6 15M1 15H1.01" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

RSSIcon.displayName = "RSSIcon";