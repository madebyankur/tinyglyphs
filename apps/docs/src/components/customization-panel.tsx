"use client";

import React from "react";
import * as TinyGlyphsIcons from "tinyglyphs/react";

import { cn } from "@/lib/utils";

import { Input } from "./input";
import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
} from "./number-field";

interface CustomizationPanelProps {
  color: string;
  setColor(color: string): void;
  size: number;
  setSize(size: number): void;
  width: number;
  setWidth(width: number): void;
  isCollapsed: boolean;
  setIsCollapsed(collapsed: boolean): void;
  className?: string;
}

export function CustomizationPanel({
  color,
  setColor,
  size,
  setSize,
  width,
  setWidth,
  isCollapsed,
  setIsCollapsed,
  className,
}: CustomizationPanelProps) {
  return (
    <aside
      className={cn(
        "animate-in slide-in-from-bottom-20 border-primary-foreground/15 ease-in-out-quint bg-background fixed right-4 bottom-4 z-20 w-[calc(100%-32px)] border duration-300 sm:w-64",
        className,
      )}
    >
      <div className="flex flex-col">
        <header
          className="group flex items-center justify-between p-4 pb-0"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <h2 className="font-departure-mono text-primary-foreground touch-none text-sm select-none">
            Customize
          </h2>
          <button
            aria-label={isCollapsed ? "Expand" : "Collapse"}
            className="text-primary-foreground/50 group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground ease-in-out-quint focus-visible:border-accent/50 focus-visible:ring-ring/10 p-2 transition-all duration-300 outline-none focus-visible:ring-[3px]"
          >
            {isCollapsed ? (
              <TinyGlyphsIcons.ChevronUpIcon />
            ) : (
              <TinyGlyphsIcons.ChevronDownIcon />
            )}
          </button>
        </header>

        <div
          className={cn(
            "ease-in-out-quint flex min-h-fit w-full scale-100 flex-col gap-4 p-4 pt-0 blur-none transition-all duration-300",
            isCollapsed && "h-0 min-h-0 opacity-0 blur-sm",
          )}
        >
          <hr
            className={cn(
              "border-primary-foreground/15 mt-4 opacity-100 transition-all duration-150",
              isCollapsed && "opacity-0",
            )}
          />
          <fieldset className="flex flex-col items-center gap-2">
            <label
              htmlFor="color"
              className="font-departure-mono text-primary-foreground w-full text-sm"
            >
              Color
            </label>
            <div className="flex w-full items-center gap-2">
              <Input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="placeholder:text-muted-foreground m-0 h-[44px] w-[40px] overflow-clip border-none p-0 focus:outline-none"
              />
              <span className="font-departure-mono text-primary-foreground text-sm">
                {color}
              </span>
            </div>
          </fieldset>

          <fieldset className="flex items-center gap-4">
            <NumberFieldRoot
              value={width}
              onValueChange={(value) => setWidth(value ?? 0)}
              min={0.75}
              max={2}
              step={0.25}
              className="flex w-full flex-col items-start gap-1"
            >
              <NumberFieldScrubArea className="flex w-full cursor-ew-resize">
                <label
                  htmlFor="stroke-width"
                  className="font-departure-mono text-primary-foreground w-full cursor-ew-resize text-sm"
                >
                  Stroke Width
                </label>
              </NumberFieldScrubArea>
              <NumberFieldGroup className="flex">
                <NumberFieldDecrement className="border-primary-foreground/5 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 flex size-10 items-center justify-center border bg-clip-padding select-none">
                  <TinyGlyphsIcons.MinusIcon
                    size={16}
                    className="stroke-foreground"
                  />
                </NumberFieldDecrement>
                <NumberFieldInput
                  id="stroke-width"
                  className="border-primary-foreground/5 text-primary-foreground h-10 w-24 border-t border-b text-center text-base tabular-nums focus:z-1 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
                />
                <NumberFieldIncrement className="border-primary-foreground/5 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 flex size-10 items-center justify-center border bg-clip-padding select-none">
                  <TinyGlyphsIcons.PlusIcon
                    size={16}
                    className="stroke-foreground"
                  />
                </NumberFieldIncrement>
              </NumberFieldGroup>
            </NumberFieldRoot>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <NumberFieldRoot
              value={size}
              onValueChange={(value) => setSize(value ?? 0)}
              min={12}
              max={128}
              step={4}
              className="flex flex-col items-start gap-1"
            >
              <NumberFieldScrubArea className="cursor-ew-resize">
                <label
                  htmlFor="icon-size"
                  className="font-departure-mono text-primary-foreground cursor-ew-resize text-sm"
                >
                  Icon Size
                </label>
              </NumberFieldScrubArea>
              <NumberFieldGroup className="flex">
                <NumberFieldDecrement className="border-primary-foreground/5 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 flex size-10 items-center justify-center border bg-clip-padding select-none">
                  <TinyGlyphsIcons.MinusIcon
                    size={12}
                    className="stroke-foreground"
                  />
                </NumberFieldDecrement>
                <NumberFieldInput
                  id="icon-size"
                  className="border-primary-foreground/5 text-primary-foreground h-10 w-24 border-t border-b text-center text-base tabular-nums focus:z-1 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
                />
                <NumberFieldIncrement className="border-primary-foreground/5 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 flex size-10 items-center justify-center border bg-clip-padding select-none">
                  <TinyGlyphsIcons.PlusIcon
                    size={12}
                    className="stroke-foreground"
                  />
                </NumberFieldIncrement>
              </NumberFieldGroup>
            </NumberFieldRoot>
          </fieldset>
        </div>
      </div>
    </aside>
  );
}
