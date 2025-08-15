import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const MinusIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 8L2 8" strokeLinecap="round"/>
    </IconBase>
  )
);

MinusIcon.displayName = "MinusIcon";