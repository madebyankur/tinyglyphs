import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const MicOffIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 7V3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3M13 7C13 9.76142 10.7614 12 8 12C7.65753 12 7.32311 11.9656 7 11.9M3.66891 9.5C3.24349 8.76457 3 7.91072 3 7M6 15H10M15 1L1 15" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

MicOffIcon.displayName = "MicOffIcon";