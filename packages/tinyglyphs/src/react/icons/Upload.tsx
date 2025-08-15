import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const UploadIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 1V11M8 1L11 4M8 1L5 4M1 11V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V11" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

UploadIcon.displayName = "UploadIcon";