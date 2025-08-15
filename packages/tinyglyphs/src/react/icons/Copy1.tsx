import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const Copy1Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 3H11.5C12.3284 3 13 3.67157 13 4.5V15M10.25 5.75H10.26M8 8H8.01M5.75 10.25H5.76M3 1V11.5C3 12.3284 3.67157 13 4.5 13H15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

Copy1Icon.displayName = "Copy1Icon";