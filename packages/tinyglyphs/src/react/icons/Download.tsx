import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const DownloadIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 10V2M8 10L11 7M8 10L5 7M1 11V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

DownloadIcon.displayName = "DownloadIcon";