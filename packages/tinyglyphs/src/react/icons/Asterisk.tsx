import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const AsteriskIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 7.99999H15M8 15V1M3 13L13 3M3 3L13 13" strokeLinecap="round"/>
    </IconBase>
  )
);

AsteriskIcon.displayName = "AsteriskIcon";