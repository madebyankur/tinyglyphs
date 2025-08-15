import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const GlobeIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.49999 9L3.30277 9.31814C7.40072 10.0413 11.5525 8.36537 14 5M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM5.93414 2.0761L5.21837 4.82346C4.46916 7.69918 5.37571 10.7532 7.57257 12.7544L9.18036 14.219C9.4545 14.4688 9.89556 14.3436 9.99772 13.9872L10.6911 11.5677C11.4979 8.75216 10.7016 5.72079 8.61531 3.66519L6.76891 1.84599C6.49481 1.57593 6.03115 1.70374 5.93414 2.0761Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

GlobeIcon.displayName = "GlobeIcon";