import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ZoomInIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 4V10M10 7L4 7M11.5 11.5L15 15M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ZoomInIcon.displayName = "ZoomInIcon";