import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const SpaceshipIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.44975 8.1066L8.57107 14.0563L9.44414 12.5922C10.9642 10.0431 12.1222 7.29498 12.8849 4.42678L13.5208 2.03553L11.5203 2.54101C8.34902 3.34227 5.31938 4.625 2.53692 6.34449L1.5 6.98528L7.44975 8.1066Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

SpaceshipIcon.displayName = "SpaceshipIcon";