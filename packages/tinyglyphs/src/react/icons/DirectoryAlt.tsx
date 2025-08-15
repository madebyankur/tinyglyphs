import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const DirectoryAltIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.49993 2H10.6458C11.7821 2 12.8209 2.64201 13.3291 3.65836L13.4999 4M2.58221 11.4932L1.58221 5.4932C1.27744 3.6646 2.68757 2 4.54139 2H6.07296C6.64112 2 7.16051 2.321 7.4146 2.82918L8.58542 5.17082C8.83951 5.679 9.3589 6 9.92706 6H13.0788C14.0547 6 14.7707 6.91708 14.5341 7.8638L13.5681 11.7276C13.2342 13.0631 12.0343 14 10.6577 14H5.54139C4.07487 14 2.8233 12.9398 2.58221 11.4932Z" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  )
);

DirectoryAltIcon.displayName = "DirectoryAltIcon";