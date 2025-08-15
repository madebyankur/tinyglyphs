import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const WebcamAltIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 11V11.7932C5.5 12.886 5.06586 13.9341 4.2931 14.7069C4.18494 14.8151 4.26154 15 4.4145 15H11.5855C11.7385 15 11.8151 14.8151 11.7069 14.7069C10.9341 13.9341 10.5 12.886 10.5 11.7932V11M11 5C11 5.41421 10.6642 5.75 10.25 5.75C9.83579 5.75 9.5 5.41421 9.5 5C9.5 4.58579 9.83579 4.25 10.25 4.25C10.6642 4.25 11 4.58579 11 5ZM5 9H11C13.2091 9 15 7.20914 15 5C15 2.79086 13.2091 1 11 1H5C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

WebcamAltIcon.displayName = "WebcamAltIcon";