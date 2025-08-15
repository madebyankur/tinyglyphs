"use client";

import React, { useMemo } from "react";
import { toast } from "sonner";
import * as TinyGlyphsIcons from "tinyglyphs/react";

import { ScrambleButton } from "@/components/scramble-button";
import { useButtonState } from "@/hooks/use-button-state";
import { useClipboard } from "@/hooks/use-clipboard";
import { useScrambleText } from "@/lib/hooks";
import { fetchSvgData } from "@/lib/utils";

import type { IconRegistryEntry } from "@/lib/interfaces";
interface IconCardProps {
  icon: IconRegistryEntry;
  color?: string;
  strokeWidth: number;
  size: number;
  onCopy: (text: string, type: "svg" | "jsx") => void;
}

export const IconCard = React.memo(function IconCard({
  icon,
  color = "var(--foreground)",
  strokeWidth,
  size,
  onCopy,
}: IconCardProps) {
  const IconComponent = icon.component;

  const svgButton = useButtonState({
    idleText: "SVG",
    loadingText: "WAIT",
    doneText: "DONE",
    scrambleDuration: 400,
    doneDuration: 800,
  });

  const jsxButton = useButtonState({
    idleText: "JSX",
    loadingText: "WAIT",
    doneText: "DONE",
    scrambleDuration: 400,
    doneDuration: 800,
  });

  const downloadButton = useButtonState({
    idleText: "DOWNLOAD",
    loadingText: "WAIT",
    doneText: "DONE",
    scrambleDuration: 400,
    doneDuration: 500,
  });

  const clipboard = useClipboard({
    onError: (error) => {
      console.error("Clipboard error:", error);
      toast.error("Failed to copy to clipboard");
    },
  });

  const svgButtonText = useScrambleText(
    svgButton.displayText,
    svgButton.isScrambling,
    400,
  );

  const jsxButtonText = useScrambleText(
    jsxButton.displayText,
    jsxButton.isScrambling,
    400,
  );

  const jsxCode = useMemo(() => {
    return `import { ${icon.importName} } from "tinyglyphs/react";

<${icon.importName} size={${size}} color="${color}" strokeWidth={${strokeWidth}} />`;
  }, [icon.importName, size, color, strokeWidth]);

  const handleCopySvg = async () => {
    svgButton.startTransition();

    try {
      const svgData = await fetchSvgData(icon.name);
      const success = await clipboard.copy(svgData);

      if (success) {
        onCopy(svgData, "svg");
      } else {
        svgButton.reset();
      }
    } catch (error) {
      console.error("Failed to copy SVG:", error);
      svgButton.reset();
    }
  };

  const handleCopyJsx = async () => {
    jsxButton.startTransition();

    try {
      const success = await clipboard.copy(jsxCode);

      if (success) {
        onCopy(jsxCode, "jsx");
      } else {
        jsxButton.reset();
      }
    } catch (error) {
      console.error("Failed to copy JSX:", error);
      jsxButton.reset();
    }
  };

  const handleDownload = async () => {
    downloadButton.startTransition();

    try {
      const svgData = await fetchSvgData(icon.name);

      const blob = new Blob([svgData], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${icon.name}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("SVG downloaded successfully");
    } catch (error) {
      console.error("Failed to download SVG:", error);
      downloadButton.reset();
      toast.error("Failed to download SVG");
    }
  };

  return (
    <div className="group bg-primary-foreground/5 hover:bg-primary-foreground/10 ease-in-out-quint relative h-full w-full transition-all duration-150">
      <div className="my-0 flex items-center justify-start px-4 py-4">
        <IconComponent
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className="transition-all duration-200"
        />
      </div>

      <div className="px-4 text-left">
        <h3 className="font-departure-mono text-primary-foreground/80 truncate text-xs">
          {icon.name}
        </h3>
      </div>

      <hr className="border-background mt-4" />

      <div className="flex w-full justify-between">
        <ScrambleButton
          onClick={handleDownload}
          disabled={downloadButton.state === "loading"}
          className="group/download-button focus-visible:bg-accent/5 w-auto border-0 px-4 py-2 text-xs focus-visible:ring-0 md:w-24 md:px-2.5"
          title="Download SVG"
          aria-label={`Download ${icon.name} as SVG`}
        >
          {downloadButton.state === "loading" ? (
            <TinyGlyphsIcons.CircleDashIcon
              size={12}
              color={color}
              className="animate-spin"
            />
          ) : (
            <TinyGlyphsIcons.DownloadIcon
              size={12}
              color={color}
              className="group-active/download-button:stroke-accent-foreground"
            />
          )}
        </ScrambleButton>
        <ScrambleButton
          onClick={handleCopySvg}
          className="group/svg-button focus-visible:bg-accent/5 flex w-full items-center justify-between gap-2 border-0 px-2 py-2 text-xs focus-visible:ring-0 md:px-2.5"
          title="Copy SVG"
          aria-label={`Copy ${icon.name} as SVG`}
          aria-live="polite"
        >
          <span aria-live="polite" aria-atomic="true">
            {svgButtonText}
          </span>
          <TinyGlyphsIcons.CopyIcon
            size={12}
            color={color}
            className="group-active/svg-button:stroke-accent-foreground"
          />
        </ScrambleButton>
        <ScrambleButton
          onClick={handleCopyJsx}
          className="group/svg-button focus-visible:bg-accent/5 flex w-full items-center justify-between gap-2 border-0 px-2 py-2 text-xs focus-visible:ring-0 md:px-2.5"
          title="Copy JSX code"
          aria-label={`Copy ${icon.name} as JSX`}
          aria-live="polite"
        >
          <span aria-live="polite" aria-atomic="true">
            {jsxButtonText}
          </span>
          <TinyGlyphsIcons.CopyIcon
            size={12}
            color={color}
            className="group-active/jsx-button:stroke-accent-foreground"
          />
        </ScrambleButton>
      </div>
    </div>
  );
});
