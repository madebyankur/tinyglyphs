import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ActivityIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 8H3.2457C3.69218 8 4.08456 7.70402 4.20722 7.27472L6 1L10 15L11.7928 8.72528C11.9154 8.29598 12.3078 8 12.7543 8H15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ActivityIcon.displayName = "ActivityIcon";