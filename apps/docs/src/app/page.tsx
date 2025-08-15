"use client";

import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import { toast, Toaster } from "sonner";
import * as TinyGlyphsIcons from "tinyglyphs/react";

import { CodeBlock } from "@/components/code-block";
import { CustomizationPanel } from "@/components/customization-panel";
import { ErrorBoundary } from "@/components/error-boundary";
import { IconCard } from "@/components/icon-card";
import { Input } from "@/components/input";
import { useDebounced } from "@/hooks/use-debounced";
import { useIconRegistry } from "@/hooks/use-icon-registry";
import { usePageAnimation } from "@/hooks/use-page-animation";
import {
  ANIMATION_DELAYS,
  DEFAULT_VALUES,
  packageManagers,
  TOAST_DURATION,
} from "@/lib/constants";
import {
  cn,
  createCopyCommandAction,
  createDownloadIconsAction,
} from "@/lib/utils";

import type { IconRegistryEntry } from "@/lib/interfaces";
export default function IconsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [color, setColor] = useState<string>(DEFAULT_VALUES.COLOR);
  const [size, setSize] = useState<number>(DEFAULT_VALUES.SIZE);
  const [width, setWidth] = useState<number>(DEFAULT_VALUES.STROKE_WIDTH);
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(true);
  const [activePackageManager, setActivePackageManager] =
    useState<string>("npm");

  const iconRegistry = useIconRegistry();
  const debouncedColor = useDebounced(color, ANIMATION_DELAYS.COLOR_DEBOUNCE);
  const { showPage, showIcons } = usePageAnimation(iconRegistry.length > 0);

  const filteredIcons = useMemo(
    () =>
      iconRegistry.filter((icon: IconRegistryEntry) =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [iconRegistry, searchTerm],
  );

  const handleCopy = useCallback((text: string, type: "svg" | "jsx") => {
    const message =
      type === "svg"
        ? "SVG successfully copied to clipboard"
        : "JSX successfully copied to clipboard";

    toast.success(message, {
      duration: TOAST_DURATION,
    });
  }, []);

  return (
    <div
      className={cn(
        "bg-background ease-in-out-quint p-4 transition-opacity duration-700 sm:p-8",
        showPage ? "opacity-100" : "opacity-0",
      )}
    >
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          className:
            "font-departure-mono border-primary-foreground/25 bg-background text-xs text-primary-foreground",
          style: {
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
            borderRadius: "0px",
            color: "var(--foreground)",
          },
        }}
        icons={{
          success: <TinyGlyphsIcons.CheckIcon />,
          info: <TinyGlyphsIcons.InfoIcon />,
          warning: <TinyGlyphsIcons.WarningIcon />,
          error: <TinyGlyphsIcons.ErrorIcon />,
          loading: <TinyGlyphsIcons.CircleDashIcon />,
        }}
      />

      <div className="mx-auto flex min-h-svh max-w-7xl flex-col">
        <header className="mb-12 flex flex-col items-center gap-8 text-center">
          <h1 className="blur-in-3xl slide-in-from-bottom-20 animate-in fade-in-0 font-display bg-primary-foreground ease-in-out-quint pointer-events-none block overflow-hidden bg-clip-text text-[4rem] leading-none text-transparent uppercase duration-500 select-none sm:text-[8rem]">
            Tiny Glyphs
          </h1>

          <p className="font-departure-mono text-primary-foreground/25 text-lg">
            A tiny collection of simple lined icons
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/madebyankur/tinyglyphs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-departure-mono border-primary-foreground/10 text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground active:bg-accent active:text-accent-foreground focus-visible:border-accent/50 focus-visible:ring-ring/10 ease-in-out-quint flex cursor-pointer items-center justify-between gap-2 border px-4 py-2 text-xs uppercase transition-colors outline-none focus-visible:ring-[3px]"
            >
              View on GitHub
            </a>
            <a
              href="https://www.figma.com/community/file/1546799690082746033"
              target="_blank"
              rel="noopener noreferrer"
              className="font-departure-mono border-primary-foreground/10 text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground active:bg-accent active:text-accent-foreground focus-visible:border-accent/50 focus-visible:ring-ring/10 ease-in-out-quint flex cursor-pointer items-center justify-between gap-2 border px-4 py-2 text-xs uppercase transition-colors outline-none focus-visible:ring-[3px]"
            >
              View on Figma
            </a>
          </div>
        </header>

        <section className="border-primary-foreground/10 grid w-full gap-2 overflow-hidden border p-4 md:p-8">
          <CodeBlock
            packageManagers={packageManagers}
            activePackageManager={activePackageManager}
            onPackageManagerChange={(packageManager) =>
              setActivePackageManager(packageManager)
            }
            packageName="tinyglyphs"
            actions={[
              createCopyCommandAction(
                packageManagers.find((pm) => pm.name === activePackageManager)
                  ?.command ?? "",
                "tinyglyphs",
              ),
              createDownloadIconsAction(),
            ]}
          />
        </section>

        <div className="grid max-w-7xl gap-8">
          <CustomizationPanel
            color={color}
            setColor={setColor}
            size={size}
            setSize={setSize}
            width={width}
            setWidth={setWidth}
            isCollapsed={isPanelCollapsed}
            setIsCollapsed={setIsPanelCollapsed}
          />

          <section className="bg-accent/5 border-accent/10 flex h-full max-w-7xl flex-col border border-t-0 p-4 md:p-8">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="relative w-full">
                <TinyGlyphsIcons.SearchIcon
                  size={14}
                  color="var(--muted-foreground)"
                  strokeWidth={2}
                  className="absolute top-1/2 left-3 -translate-y-1/2 transform"
                />
                <Input
                  placeholder={`Search ${filteredIcons.length} icons...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-4 pl-10"
                  aria-label="Search icons"
                  aria-describedby="search-results-count"
                />
              </div>
            </div>

            <div className="border-primary-foreground/15 h-full min-h-64 border">
              <div
                id="search-results-count"
                className="sr-only"
                aria-live="polite"
                aria-atomic="true"
              >
                {filteredIcons.length} icons found
              </div>

              {filteredIcons.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="bg-primary-foreground/5 flex h-24 w-24 items-center justify-center">
                    <TinyGlyphsIcons.ArchiveIcon size={40} />
                  </div>
                  <h3 className="font-departure-mono text-primary-foreground text-lg font-medium">
                    No icons found
                  </h3>
                  <p className="font-departure-mono text-primary-foreground/50 text-sm">
                    Try searching with a different term or browse all icons
                    above.
                  </p>
                </div>
              ) : (
                <div className="ease-in-out-quint relative opacity-100 transition-opacity duration-300">
                  <div className="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {filteredIcons.map(
                      (icon: IconRegistryEntry, index: number) => (
                        <div
                          key={icon.name}
                          className={cn(
                            "ease-in-out-quint transition-opacity duration-500",
                            showIcons ? "opacity-100" : "opacity-0",
                          )}
                          style={{
                            transitionDelay: showIcons
                              ? `${index * ANIMATION_DELAYS.ICON_STAGGER}ms`
                              : "0ms",
                          }}
                        >
                          <ErrorBoundary>
                            <IconCard
                              icon={icon}
                              onCopy={handleCopy}
                              color={debouncedColor}
                              strokeWidth={width}
                              size={size}
                            />
                          </ErrorBoundary>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>

          <footer className="bottom-0 mx-auto mt-12 flex max-w-7xl flex-col items-center justify-center gap-4 px-8 delay-500 sm:pb-0">
            <span className="font-departure-mono text-primary-foreground text-xs">
              2025 Tiny Glyphs
            </span>
            <span className="font-departure-mono text-primary-foreground text-xs">
              Made by{" "}
              <a
                href="https://ankur.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/75 hover:text-primary-foreground/100 focus:ring-primary-foreground/90 underline decoration-double underline-offset-4 transition-colors duration-300 focus:ring-2 focus:outline-none"
              >
                Ankur Chauhan
              </a>
            </span>
            <Image
              src="/assets/logo.svg"
              alt="Ankur Chauhan"
              width={100}
              height={40}
              className="ease-in-out-quint mt-12 opacity-50 transition duration-300 hover:opacity-100"
            />
          </footer>
        </div>
      </div>
    </div>
  );
}
