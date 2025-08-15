import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ArrowsOutIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 6L15 1M15 1V5M15 1H11M1 1H5M1 1L6 6M1 1V5M1 15V11M1 15H5M1 15L6 10M15 11V15M15 15H11M15 15L10 10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ArrowsOutIcon.displayName = "ArrowsOutIcon";