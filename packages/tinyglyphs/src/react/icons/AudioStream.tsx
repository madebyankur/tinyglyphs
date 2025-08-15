import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const AudioStreamIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 10V6M8 12V4M11 13V3M14 10V6M5 15V1" strokeLinecap="round"/>
    </IconBase>
  )
);

AudioStreamIcon.displayName = "AudioStreamIcon";