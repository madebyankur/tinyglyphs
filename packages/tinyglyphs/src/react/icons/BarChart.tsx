import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BarChartIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.75 15V2.5C5.75 1.67157 5.07843 1 4.25 1H2.75C1.92157 1 1.25 1.67157 1.25 2.5V13.5C1.25 14.3284 1.92157 15 2.75 15H5.75ZM5.75 15H10.25M5.75 15V6.5C5.75 5.67157 6.42157 5 7.25 5H8.75C9.57843 5 10.25 5.67157 10.25 6.5V15M10.25 15H13.25C14.0784 15 14.75 14.3284 14.75 13.5V10.5C14.75 9.67157 14.0784 9 13.25 9H11.75C10.9216 9 10.25 9.67157 10.25 10.5V15Z" strokeLinejoin="round"/>
    </IconBase>
  )
);

BarChartIcon.displayName = "BarChartIcon";