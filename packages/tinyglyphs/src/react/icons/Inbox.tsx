import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const InboxIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.5 8L3.64447 1.9955C3.85768 1.39851 4.42316 1 5.05708 1H10.9429C11.5768 1 12.1423 1.39851 12.3555 1.9955L14.5 8M12 15H4C2.34315 15 1 13.6569 1 12V11.5C1 10.6716 1.67157 10 2.5 10H5.17157C5.70201 10 6.21071 10.2107 6.58579 10.5858C7.36684 11.3668 8.63316 11.3668 9.41421 10.5858C9.78929 10.2107 10.298 10 10.8284 10H13.5C14.3284 10 15 10.6716 15 11.5V12C15 13.6569 13.6569 15 12 15Z" strokeLinecap="round"/>
    </IconBase>
  )
);

InboxIcon.displayName = "InboxIcon";