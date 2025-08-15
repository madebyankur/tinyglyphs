import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const OTPAltIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 5V4.5C6.5 3.67157 7.17157 3 8 3C8.82843 3 9.5 3.67157 9.5 4.5V4.693C9.5 4.89601 9.46349 5.09737 9.39221 5.28745L6.5 13H9.5M11.5 5V4.5C11.5 3.67157 12.1716 3 13 3C13.8284 3 14.5 3.67157 14.5 4.5V5.60555C14.5 6.47673 14.0646 7.29026 13.3397 7.7735L13 8L13.5022 8.33482C14.1256 8.75039 14.5 9.44999 14.5 10.1992V11.5C14.5 12.3284 13.8284 13 13 13C12.1716 13 11.5 12.3284 11.5 11.5V11M4.5 4.5V11.5C4.5 12.3284 3.82843 13 3 13C2.17157 13 1.5 12.3284 1.5 11.5V4.5C1.5 3.67157 2.17157 3 3 3C3.82843 3 4.5 3.67157 4.5 4.5Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

OTPAltIcon.displayName = "OTPAltIcon";