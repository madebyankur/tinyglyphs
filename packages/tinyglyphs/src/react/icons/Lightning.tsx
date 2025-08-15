import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const LightningIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 1L4 8H12L6 15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

LightningIcon.displayName = "LightningIcon";