import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const DollarIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 10L4.96127 10.3098C4.71634 12.2693 6.24419 14 8.2189 14H8.45862C9.92513 14 11.1767 12.9398 11.4178 11.4932C11.7226 9.6646 10.3124 8 8.45862 8H7.55704C5.46337 8 4.10165 5.79669 5.03797 3.92406C5.60596 2.78808 6.86399 2.1728 8.10939 2.42188L9.03884 2.60777C10.1792 2.83583 11 3.83709 11 5M8 1V15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

DollarIcon.displayName = "DollarIcon";