import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const AIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 12.5L5.2 9.50002M5.2 9.50002L7.53576 3.66062C7.70339 3.24155 8.29661 3.24155 8.46424 3.66062L10.8 9.50002M5.2 9.50002H10.8M10.8 9.50002L12 12.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

AIcon.displayName = "AIcon";