import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const MailOpenIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 6V12C1 13.6568 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V6M1 6L6.25629 2.24551C7.29938 1.50044 8.70062 1.50044 9.74371 2.24551L15 6M1 6L6.81824 8.49353C7.57289 8.81695 8.42711 8.81695 9.18176 8.49353L15 6" strokeLinejoin="round"/>
    </IconBase>
  )
);

MailOpenIcon.displayName = "MailOpenIcon";