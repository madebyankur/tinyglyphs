import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const TextIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 2H4C2.89543 2 2 2.89543 2 4M8 2H12C13.1046 2 14 2.89543 14 4M8 2V14M8 14H6M8 14H10" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

TextIcon.displayName = "TextIcon";