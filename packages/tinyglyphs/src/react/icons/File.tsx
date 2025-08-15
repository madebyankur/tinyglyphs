import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const FileIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 1H5C3.34315 1 2 2.34315 2 4V12C2 13.6569 3.34315 15 5 15H11C12.6569 15 14 13.6569 14 12V5.5M9.5 1L14 5.5M9.5 1V4C9.5 4.82843 10.1716 5.5 11 5.5H14M5 5H7M5 8H11M5 11H8" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

FileIcon.displayName = "FileIcon";