"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { NumberField } from "@base-ui-components/react/number-field";

function NumberFieldRoot({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NumberField.Root>) {
  return (
    <NumberField.Root className={cn("group relative", className)} {...props} />
  );
}
NumberFieldRoot.displayName = "NumberFieldRoot";

function NumberFieldScrubArea({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NumberField.ScrubArea>) {
  return (
    <NumberField.ScrubArea
      className={cn(
        "flex cursor-ew-resize items-center justify-center p-1 select-none",
        className,
      )}
      {...props}
    />
  );
}
NumberFieldScrubArea.displayName = "NumberFieldScrubArea";

function NumberFieldScrubAreaCursor({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NumberField.ScrubAreaCursor>) {
  return (
    <NumberField.ScrubAreaCursor
      className={cn(
        "pointer-events-none absolute z-50 h-4 w-4",
        "bg-primary",
        "opacity-0 data-[scrubbing]:opacity-100",
        "transition-opacity duration-150",
        className,
      )}
      {...props}
    />
  );
}
NumberFieldScrubAreaCursor.displayName = "NumberFieldScrubAreaCursor";

function NumberFieldGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NumberField.Group>) {
  return (
    <NumberField.Group
      className={cn(
        "border-border relative flex w-full items-center overflow-hidden border",
        "focus-within:border-accent/50 focus-within:ring-ring/10 focus-within:ring-[3px]",
        "data-[invalid]:border-destructive data-[invalid]:ring-destructive/20",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        "bg-transparent transition-colors",
        className,
      )}
      {...props}
    />
  );
}
NumberFieldGroup.displayName = "NumberFieldGroup";

function NumberFieldInput({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NumberField.Input>) {
  return (
    <NumberField.Input
      className={cn(
        "font-departure-mono min-w-0 flex-1 bg-transparent px-3 py-2 text-base tabular-nums outline-none",
        "placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "text-center md:text-sm",
        "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        className,
      )}
      {...props}
    />
  );
}
NumberFieldInput.displayName = "NumberFieldInput";

const stepperButtonStyles = cn(
  "flex items-center justify-center h-full w-8 min-w-8",
  "border-0 bg-transparent text-muted-foreground",
  "hover:bg-muted/10 hover:text-foreground",
  "active:bg-muted active:scale-95",
  "focus-visible:bg-muted/50 focus-visible:text-foreground focus-visible:outline-none",
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-muted-foreground",
  "transition-all duration-150",
);

function NumberFieldDecrement({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NumberField.Decrement> & {
  children?: React.ReactNode;
}) {
  return (
    <NumberField.Decrement
      className={cn(stepperButtonStyles, "border-input border-r", className)}
      {...props}
    >
      {children ?? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
        </svg>
      )}
    </NumberField.Decrement>
  );
}
NumberFieldDecrement.displayName = "NumberFieldDecrement";

function NumberFieldIncrement({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NumberField.Increment> & {
  children?: React.ReactNode;
}) {
  return (
    <NumberField.Increment
      className={cn(stepperButtonStyles, "border-input border-l", className)}
      {...props}
    >
      {children ?? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      )}
    </NumberField.Increment>
  );
}
NumberFieldIncrement.displayName = "NumberFieldIncrement";

export {
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
};
