import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const FrownIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 11C6.82405 9.35191 9.17595 9.35191 10 11M10 6H10.01M6 6H6.01M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

FrownIcon.displayName = "FrownIcon";