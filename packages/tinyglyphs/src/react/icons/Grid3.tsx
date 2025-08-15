import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Grid3Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.75 1H4C2.34315 1 1 2.34315 1 4V5.75M5.75 1H12C13.6569 1 15 2.34315 15 4V5.75M5.75 1V15M5.75 15H12C13.6569 15 15 13.6569 15 12V5.75M5.75 15H4C2.34315 15 1 13.6569 1 12V5.75M1 5.75H15M10.25 1V15M1 10.25H15" strokeLinejoin="round"/>
    </IconBase>
  )
);

Grid3Icon.displayName = "Grid3Icon";