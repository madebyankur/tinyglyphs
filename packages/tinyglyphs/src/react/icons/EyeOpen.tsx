import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const EyeOpenIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 1H8.01M4.25 1.75H4.26M1 3.5H1.01M11.5 1.75H11.51M15 3.5H15.01M14.2741 6.85926C14.717 7.55526 14.717 8.44474 14.2741 9.14074C11.3518 13.7329 4.64821 13.7329 1.72593 9.14074C1.28301 8.44474 1.28301 7.55527 1.72593 6.85926C4.64821 2.26709 11.3518 2.26709 14.2741 6.85926ZM8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

EyeOpenIcon.displayName = "EyeOpenIcon";