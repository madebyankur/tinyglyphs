import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ItalicIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 2L7 14M9 2H6M9 2H12M7 14H4M7 14H10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ItalicIcon.displayName = "ItalicIcon";