import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BoldIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 2V14H10.75C12.5449 14 14 12.5449 14 10.75C14 8.95507 12.5449 7.5 10.75 7.5H2H9.75C11.2688 7.5 12.5 6.26878 12.5 4.75C12.5 3.23122 11.2688 2 9.75 2H2Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BoldIcon.displayName = "BoldIcon";