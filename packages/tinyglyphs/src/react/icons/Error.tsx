import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ErrorIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 8.75V4.75M8 11.5H8.01M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

ErrorIcon.displayName = "ErrorIcon";