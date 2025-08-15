const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../../../icons");
const srcDir = path.join(__dirname, "../src");

const config = {
  validate: process.argv.includes("--validate"),
  optimize: process.argv.includes("--optimize"),
  verbose: process.argv.includes("--verbose"),
  dryRun: process.argv.includes("--dry-run"),
  clean: process.argv.includes("--clean"),
  help: process.argv.includes("--help"),
};

const stats = {
  total: 0,
  processed: 0,
  errors: 0,
  warnings: 0,
  frameworks: 0,
};

function showHelp() {
  console.log(`
◐ TinyGlyphs Icon Generator

USAGE:
  node scripts/generate.js [options]

OPTIONS:
  --validate      Validate SVG files for common issues
  --optimize      Apply basic SVG optimization
  --verbose       Enable detailed logging
  --dry-run       Preview changes without writing files
  --clean         Remove existing generated files before generating
  --help          Show this help message

EXAMPLES:
  node scripts/generate.js --validate --verbose
  node scripts/generate.js --clean --optimize
  node scripts/generate.js --dry-run --validate

FRAMEWORKS SUPPORTED:
  ✅ React (.tsx)
  ✅ Vue (.ts)
  ✅ Svelte (.svelte)
  ✅ Angular (.ts)
`);
}

function validateSvg(svgContent, fileName) {
  const issues = [];

  if (!svgContent.trim()) {
    issues.push({ type: "error", message: "SVG file is empty" });
    return issues;
  }

  if (!svgContent.includes("<svg")) {
    issues.push({ type: "error", message: "No <svg> tag found" });
  }

  if (!svgContent.includes("viewBox")) {
    issues.push({ type: "warning", message: "Missing viewBox attribute" });
  }

  // Check for consistent viewBox (should be 0 0 16 16)
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
  if (viewBoxMatch && viewBoxMatch[1] !== "0 0 16 16") {
    issues.push({
      type: "warning",
      message: `ViewBox is "${viewBoxMatch[1]}", expected "0 0 16 16"`,
    });
  }

  // Check for inline styles (should be avoided)
  if (svgContent.includes("style=")) {
    issues.push({
      type: "warning",
      message: "Contains inline styles, consider using attributes",
    });
  }

  // Check for hardcoded colors
  const colorAttributes = ["fill", "stroke"];
  colorAttributes.forEach((attr) => {
    const regex = new RegExp(
      `${attr}=["'](?!none|currentColor|transparent)([^"']+)["']`,
      "g"
    );
    const matches = svgContent.match(regex);
    if (matches) {
      issues.push({
        type: "warning",
        message: `Contains hardcoded ${attr} colors: ${matches.join(", ")}`,
      });
    }
  });

  // Check for hardcoded stroke-width
  const strokeWidthMatches = svgContent.match(/\s+stroke-width="[^"]*"/g);
  if (strokeWidthMatches) {
    issues.push({
      type: "warning",
      message: `Contains hardcoded stroke-width values: ${strokeWidthMatches.join(", ")}`,
    });
  }

  // Check for excessive complexity (too many elements)
  const elementCount = (
    svgContent.match(/<(path|circle|line|rect|polygon|polyline|ellipse)/g) || []
  ).length;
  if (elementCount > 20) {
    issues.push({
      type: "warning",
      message: `High complexity: ${elementCount} elements (consider simplifying)`,
    });
  }

  // Check for missing stroke-linecap and stroke-linejoin
  if (svgContent.includes("stroke") && !svgContent.includes("stroke-linecap")) {
    issues.push({
      type: "info",
      message: 'Consider adding stroke-linecap="round" for consistent styling',
    });
  }

  return issues;
}

function optimizeSvg(svgContent) {
  let optimized = svgContent;

  // Remove comments
  optimized = optimized.replace(/<!--[\s\S]*?-->/g, "");

  // Remove unnecessary whitespace
  optimized = optimized.replace(/\s+/g, " ").trim();

  // Remove empty attributes
  optimized = optimized.replace(/\s+[a-zA-Z-]+=""\s*/g, " ");

  return optimized;
}

function convertSvgForReact(svgContent) {
  let converted = svgContent;

  // Remove hardcoded styling attributes that should be controlled by props
  converted = converted.replace(/\s+stroke="[^"]*"/g, "");
  converted = converted.replace(/\s+fill="[^"]*"/g, "");
  converted = converted.replace(/\s+stroke-width="[^"]*"/g, "");
  // Note: We keep stroke-linecap, stroke-linejoin, stroke-opacity, etc.
  // as they might be needed for specific styling and will be converted to camelCase

  // Remove all style attributes entirely
  // Style attributes should not be used in icon libraries as they prevent customization
  converted = converted.replace(/\s+style="[^"]*"/g, "");

  // Convert kebab-case attributes to camelCase for React
  const attributeMap = {
    "clip-path": "clipPath",
    "clip-rule": "clipRule",
    "fill-rule": "fillRule",
    "fill-opacity": "fillOpacity",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-miterlimit": "strokeMiterlimit",
    "stroke-opacity": "strokeOpacity",
    "stroke-width": "strokeWidth",
  };

  Object.entries(attributeMap).forEach(([kebab, camel]) => {
    const regex = new RegExp(`\\b${kebab}=`, "g");
    converted = converted.replace(regex, `${camel}=`);
  });

  return converted;
}

function cleanSvgContent(svgContent) {
  let cleaned = svgContent;

  // Remove hardcoded styling attributes that should be controlled by props
  cleaned = cleaned.replace(/\s+stroke="[^"]*"/g, "");
  cleaned = cleaned.replace(/\s+fill="[^"]*"/g, "");
  cleaned = cleaned.replace(/\s+stroke-width="[^"]*"/g, "");

  // Remove all style attributes entirely
  // Style attributes should not be used in icon libraries as they prevent customization
  cleaned = cleaned.replace(/\s+style="[^"]*"/g, "");

  return cleaned;
}

function logMessage(type, message, fileName = "") {
  const prefix = fileName ? `[${fileName}] ` : "";
  const emoji = {
    error: "❌",
    warning: "⚠️ ",
    info: "ℹ️ ",
    success: "✅",
    verbose: "🔍",
  };

  console.log(`${emoji[type] || ""} ${prefix}${message}`);
}

function sanitizeIconName(name) {
  // Handle special cases for first character
  const specialCases = {
    "@": "At",
    3: "Three",
    2: "Two",
    1: "One",
  };

  let sanitized = name;

  // Replace special characters at the start
  if (specialCases[name[0]]) {
    sanitized = specialCases[name[0]] + name.slice(1);
  }

  // Replace hyphens and other special characters with proper casing
  sanitized = sanitized
    .replace(/-(\d+)/g, "$1") // Remove hyphens before numbers: "Copy-1" -> "Copy1"
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()) // Convert kebab-case: "arrow-left" -> "arrowLeft"
    .replace(/[^a-zA-Z0-9]/g, ""); // Remove any remaining special characters

  // Ensure it starts with a capital letter
  return sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
}

const frameworks = {
  react: {
    extension: ".tsx",
    generateComponent: (iconName, svgContent) => {
      const componentName = sanitizeIconName(iconName);
      const reactSvgContent = convertSvgForReact(svgContent);
      return `import { forwardRef } from "react";
import { IconBase } from "../icon-base";
import type { IconProps } from "../types";

export const ${componentName}Icon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase ref={ref} {...props}>
      ${reactSvgContent}
    </IconBase>
  )
);

${componentName}Icon.displayName = "${componentName}Icon";`;
    },
  },

  vue: {
    extension: ".ts",
    generateComponent: (iconName, svgContent) => {
      const componentName = sanitizeIconName(iconName);
      const cleanedSvgContent = cleanSvgContent(svgContent);
      // Extract SVG elements and convert to Vue h() calls
      const elements = extractSvgElements(cleanedSvgContent);
      const vueElements = elements
        .map((el) => convertToVueElement(el))
        .join(",\n      ");

      return `import { defineComponent, h } from 'vue'
import { IconBase, iconBaseProps } from '../icon-base'

export const ${componentName}Icon = defineComponent({
  name: '${componentName}Icon',
  props: iconBaseProps,
  setup(props, { attrs }) {
    return () => h(IconBase, { ...props, ...attrs }, () => [
      ${vueElements}
    ])
  }
})`;
    },
  },

  svelte: {
    extension: ".svelte",
    generateComponent: (iconName, svgContent) => {
      const componentName = sanitizeIconName(iconName);
      const cleanedSvgContent = cleanSvgContent(svgContent);
      return `<script lang="ts">
  export let size: number | string = 16;
  export let color: string = 'currentColor';
  export let strokeWidth: number | string = 1;
  export let absoluteStrokeWidth: boolean = false;

  $: actualStrokeWidth = absoluteStrokeWidth
    ? Number(strokeWidth) * (16 / Number(size))
    : strokeWidth;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 16 16"
  fill="none"
  stroke={color}
  stroke-width={actualStrokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon {$$props.class || ''}"
  {...$$restProps}
>
  ${cleanedSvgContent}
</svg>`;
    },
  },

  angular: {
    extension: ".ts",
    generateComponent: (iconName, svgContent) => {
      const componentName = sanitizeIconName(iconName);
      const cleanedSvgContent = cleanSvgContent(svgContent);
      return `import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-${iconName.toLowerCase()}',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 16 16"
      fill="none"
      [attr.stroke]="color"
      [attr.stroke-width]="actualStrokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      [class]="'icon ' + (class || '')"
    >
      ${cleanedSvgContent}
    </svg>
  \`
})
export class ${componentName}IconComponent {
  @Input() size: number | string = 16;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 1;
  @Input() absoluteStrokeWidth: boolean = false;
  @Input() class: string = '';

  get actualStrokeWidth(): number | string {
    return this.absoluteStrokeWidth
      ? Number(this.strokeWidth) * (16 / Number(this.size))
      : this.strokeWidth;
  }
}`;
    },
  },
};

// Helper function to extract SVG elements
function extractSvgElements(svgContent) {
  const elementRegex =
    /<(path|circle|line|rect|polygon|polyline|ellipse)[^>]*\/?>/g;
  const elements = [];
  let match;

  while ((match = elementRegex.exec(svgContent)) !== null) {
    elements.push(match[0]);
  }

  return elements;
}

// Helper function to convert SVG element to Vue h() call
function convertToVueElement(element) {
  const tagMatch = element.match(/<(\w+)/);
  if (!tagMatch) return "";

  const tag = tagMatch[1];
  const attrs = {};

  // Extract attributes
  const attrRegex = /(\w+(?:-\w+)*)=["']([^"']+)["']/g;
  let attrMatch;

  while ((attrMatch = attrRegex.exec(element)) !== null) {
    let [, key, value] = attrMatch;

    // Convert React/HTML props to Vue props
    key = key
      .replace(/strokeWidth/g, "stroke-width")
      .replace(/strokeLinecap/g, "stroke-linecap")
      .replace(/strokeLinejoin/g, "stroke-linejoin")
      .replace(/strokeDasharray/g, "stroke-dasharray")
      .replace(/fillRule/g, "fill-rule");

    attrs[key] = value;
  }

  return `h('${tag}', ${JSON.stringify(attrs)})`;
}

function main() {
  // Show help if requested
  if (config.help) {
    showHelp();
    return;
  }

  console.log("◐ TinyGlyphs Icon Generator");
  console.log("==============================");

  if (config.dryRun) {
    console.log("🔍 DRY RUN MODE - No files will be written");
  }

  // Read all SVG files
  const svgFiles = fs
    .readdirSync(iconsDir)
    .filter((file) => file.endsWith(".svg"));
  stats.total = svgFiles.length;

  console.log(`Found ${svgFiles.length} SVG files`);

  if (config.validate) {
    console.log("\n📋 Validating SVG files...");
    validateAllSvgs(svgFiles);
  }

  if (config.clean && !config.dryRun) {
    console.log("\n🧹 Cleaning existing generated files...");
    cleanExistingFiles();
  }

  console.log("\n🏗️  Generating framework components...");
  generateAllFrameworks(svgFiles);

  // Show final statistics
  showStatistics();
}

function validateAllSvgs(svgFiles) {
  svgFiles.forEach((svgFile) => {
    const svgPath = path.join(iconsDir, svgFile);
    const svgContent = fs.readFileSync(svgPath, "utf-8");
    const issues = validateSvg(svgContent, svgFile);

    issues.forEach((issue) => {
      if (issue.type === "error") stats.errors++;
      if (issue.type === "warning") stats.warnings++;

      if (config.verbose || issue.type === "error") {
        logMessage(issue.type, issue.message, svgFile);
      }
    });
  });

  console.log(
    `\n📊 Validation complete: ${stats.errors} errors, ${stats.warnings} warnings`
  );
}

function cleanExistingFiles() {
  Object.keys(frameworks).forEach((frameworkName) => {
    const frameworkDir = path.join(srcDir, frameworkName);
    if (fs.existsSync(frameworkDir)) {
      const iconsDir = path.join(frameworkDir, "icons");
      if (fs.existsSync(iconsDir)) {
        fs.rmSync(iconsDir, { recursive: true, force: true });
        if (config.verbose) {
          logMessage("verbose", `Cleaned ${frameworkName} icons directory`);
        }
      }
    }
  });
}

function generateAllFrameworks(svgFiles) {
  stats.frameworks = Object.keys(frameworks).length;

  // Process each framework
  Object.entries(frameworks).forEach(([frameworkName, frameworkConfig]) => {
    const frameworkDir = path.join(srcDir, frameworkName);
    const frameworkIconsDir = path.join(frameworkDir, "icons");

    // Create framework and icons directories
    if (!fs.existsSync(frameworkDir)) {
      fs.mkdirSync(frameworkDir, { recursive: true });
    }
    if (!fs.existsSync(frameworkIconsDir)) {
      fs.mkdirSync(frameworkIconsDir, { recursive: true });
    }

    console.log(`\n📦 Generating ${frameworkName.toUpperCase()} components...`);

    const exports = [];

    svgFiles.forEach((svgFile) => {
      const svgPath = path.join(iconsDir, svgFile);
      let svgContent = fs.readFileSync(svgPath, "utf-8");

      // Apply optimization if requested
      if (config.optimize) {
        svgContent = optimizeSvg(svgContent);
      }

      // Extract icon name from filename
      const iconName = path.basename(svgFile, ".svg");
      const componentName = sanitizeIconName(iconName);

      // Extract SVG content (everything between <svg> tags)
      const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
      if (!svgMatch) {
        logMessage("error", `Could not parse SVG content for ${svgFile}`);
        stats.errors++;
        return;
      }

      const innerSvgContent = svgMatch[1].trim();

      try {
        // Generate component
        const componentContent = frameworkConfig.generateComponent(
          iconName,
          innerSvgContent
        );

        if (!config.dryRun) {
          // Write component file
          const componentPath = path.join(
            frameworkIconsDir,
            `${componentName}${frameworkConfig.extension}`
          );
          fs.writeFileSync(componentPath, componentContent);
        }

        exports.push({
          componentName,
          exportLine:
            frameworkName === "angular"
              ? `export { ${componentName}IconComponent } from "./icons/${componentName}";`
              : frameworkName === "svelte"
                ? `export { default as ${componentName}Icon } from "./icons/${componentName}.svelte";`
                : `export { ${componentName}Icon } from "./icons/${componentName}";`,
        });

        stats.processed++;

        if (config.verbose) {
          logMessage(
            "verbose",
            `Generated ${componentName}${frameworkConfig.extension}`,
            frameworkName
          );
        }
      } catch (error) {
        logMessage(
          "error",
          `Failed to generate component: ${error.message}`,
          svgFile
        );
        stats.errors++;
      }
    });

    if (!config.dryRun) {
      // Generate framework-specific base files and index
      generateFrameworkBase(frameworkName, frameworkDir);
      generateFrameworkIndex(frameworkName, frameworkDir, exports);
    }

    logMessage(
      "success",
      `Generated ${exports.length} ${frameworkName.toUpperCase()} components`
    );
  });
}

// Function to generate framework-specific base files
function generateFrameworkBase(frameworkName, frameworkDir) {
  switch (frameworkName) {
    case "react":
      // React base files already exist
      break;

    case "vue":
      // Vue base files already exist
      break;

    case "svelte":
      // No base component needed for Svelte
      fs.writeFileSync(
        path.join(frameworkDir, "types.ts"),
        `export interface IconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  class?: string;
}`
      );
      break;

    case "angular":
      fs.writeFileSync(
        path.join(frameworkDir, "types.ts"),
        `export interface IconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  class?: string;
}`
      );
      break;
  }
}

// Function to generate framework-specific index files
function generateFrameworkIndex(frameworkName, frameworkDir, exports) {
  let indexContent = "";

  switch (frameworkName) {
    case "react":
      indexContent = `// React icon exports
export { IconBase } from "./icon-base";
export type { IconProps } from "./types";

// Icon components
${exports.map((e) => e.exportLine).join("\n")}
`;
      break;

    case "vue":
      indexContent = `// Vue icon exports
export { IconBase } from "./icon-base";
export type { IconProps } from "./types";

// Icon components
${exports.map((e) => e.exportLine).join("\n")}
`;
      break;

    case "svelte":
      indexContent = `// Svelte icon exports
export type { IconProps } from "./types";

// Icon components
${exports.map((e) => e.exportLine).join("\n")}
`;
      break;

    case "angular":
      indexContent = `// Angular icon exports
export type { IconProps } from "./types";

// Icon components
${exports.map((e) => e.exportLine).join("\n")}
`;
      break;
  }

  if (!config.dryRun) {
    fs.writeFileSync(path.join(frameworkDir, "index.ts"), indexContent);
  }
}

function showStatistics() {
  console.log("\n📊 Generation Statistics");
  console.log("========================");
  console.log(`📁 Total SVG files: ${stats.total}`);
  console.log(`⚡ Components processed: ${stats.processed}`);
  console.log(`🏗️  Frameworks: ${stats.frameworks}`);
  console.log(`❌ Errors: ${stats.errors}`);
  console.log(`⚠️  Warnings: ${stats.warnings}`);

  if (config.dryRun) {
    console.log("\n🔍 DRY RUN - No files were actually written");
  } else {
    console.log("\n🎉 Multi-framework generation complete!");
  }

  console.log("\nSupported frameworks:");
  Object.keys(frameworks).forEach((fw) => {
    console.log(`  ✅ ${fw.charAt(0).toUpperCase() + fw.slice(1)}`);
  });

  if (stats.errors > 0) {
    console.log(
      `\n⚠️  Generation completed with ${stats.errors} errors. Please review the output above.`
    );
    process.exit(1);
  }
}

main();
