import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowReturnRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H7M15 6L11 2M15 6L11 10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowReturnRightIcon.displayName = "ArrowReturnRightIcon";