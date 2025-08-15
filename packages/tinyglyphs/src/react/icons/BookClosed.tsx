import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const BookClosedIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 13.5V15H13.5M2 13.5V2.5C2 1.67157 2.67157 1 3.5 1H14V12H3.5C2.67157 12 2 12.6716 2 13.5ZM13.5 15H14M13.5 15V12" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

BookClosedIcon.displayName = "BookClosedIcon";