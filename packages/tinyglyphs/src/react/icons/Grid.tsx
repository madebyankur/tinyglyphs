import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const GridIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 1H4C2.34315 1 1 2.34315 1 4V8M8 1H12C13.6569 1 15 2.34315 15 4V8M8 1V15M8 15H12C13.6569 15 15 13.6569 15 12V8M8 15H4C2.34315 15 1 13.6569 1 12V8M1 8H15" strokeLinejoin="round"/>
    </IconBase>
  )
);

GridIcon.displayName = "GridIcon";