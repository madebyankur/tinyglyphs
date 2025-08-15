import { forwardRef } from "react";
import { clsx } from "clsx";
import type { IconProps } from "./types";

export interface IconBaseProps extends IconProps {
  children: React.ReactNode;
  viewBox?: string;
}

export const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  (
    {
      children,
      size = 16,
      color = "currentColor",
      strokeWidth = 1,
      absoluteStrokeWidth = false,
      viewBox = "0 0 16 16",
      className,
      ...props
    },
    ref
  ) => {
    const actualStrokeWidth = absoluteStrokeWidth
      ? Number(strokeWidth) * (16 / Number(size))
      : strokeWidth;

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke={color}
        strokeWidth={actualStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx("icon", className)}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

IconBase.displayName = "IconBase";
