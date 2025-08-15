import { ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function createCopyCommandAction(
  command?: string,
  packageName?: string,
) {
  return {
    label: "Copy",
    onClick: async () => {
      if (command) {
        await navigator.clipboard.writeText(`${command} ${packageName || ""}`);
        toast.success("Command copied to clipboard");
      }
    },
    scrambleStates: {
      initial: "Copy",
      transitioning: "WAIT",
      success: "DONE",
    },
  };
}

export function createDownloadIconsAction(): {
  label: string;
  onClick: () => void;
} {
  return {
    label: "Download all icons",
    onClick: () => {
      const link = document.createElement("a");
      link.href = "/assets/tinyglyphs.zip";
      link.download = "tinyglyphs.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  };
}

/**
 * Fetches SVG data from a file
 */
export async function fetchSvgData(iconName: string): Promise<string> {
  const response = await fetch(`/svg/${iconName}.svg`);
  if (!response.ok) {
    throw new Error(`Failed to fetch SVG for ${iconName}`);
  }
  return response.text();
}

/**
 * Converts SVG to JSX format
 */
export function svgToJsx(svgContent: string): string {
  return svgContent
    .replace(/class=/g, "className=")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    .replace(/xmlns:xlink/g, "xmlnsXlink")
    .replace(/<svg([^>]*)>/, `<svg$1>`)
    .replace(/<\/svg>/, "</svg>");
}

export function getCurrentCommand(
  command: string | undefined,
  packageManagers: Array<{ name: string; command: string }> | undefined,
  activePackageManager: string | undefined,
): string {
  if (command && typeof command === "string") {
    return command.trim();
  }

  if (!packageManagers || !Array.isArray(packageManagers)) {
    console.warn("getCurrentCommand: packageManagers is not a valid array");
    return "";
  }

  if (!activePackageManager) {
    console.warn("getCurrentCommand: activePackageManager is not provided");
    return "";
  }

  const selectedPM = packageManagers.find(
    (pm) => pm?.name === activePackageManager && typeof pm.command === "string",
  );

  if (!selectedPM) {
    console.warn(
      `getCurrentCommand: No package manager found for ${activePackageManager}`,
    );
    return "";
  }

  return selectedPM.command.trim();
}

/**
 * Fetches SVG content from the public SVG directory
 */
export async function fetchIconSVG(iconName: string): Promise<string> {
  try {
    const response = await fetch(`/svg/${iconName}.svg`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch SVG: ${response.status} ${response.statusText}`,
      );
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching SVG for ${iconName}:`, error);
    throw error;
  }
}

/**
 * Downloads SVG content as a file
 */
export function downloadSVG(svgContent: string, filename: string): void {
  try {
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download SVG:", error);
    throw error;
  }
}

/**
 * Generates JSX code for an icon component
 */
export function generateIconJSX(
  importName: string,
  size: number,
  color: string,
  strokeWidth: number,
): string {
  return `import { ${importName} } from "tinyglyphs";

<${importName} size={${size}} color="${color}" strokeWidth={${strokeWidth}} />`;
}
