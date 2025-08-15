const fs = require("fs");
const path = require("path");

describe("Icon Components Integration", () => {
  const srcDir = path.join(__dirname, "../src");
  const distDir = global.testUtils.distDir;

  beforeAll(() => {
    if (!global.testUtils.hasDistFiles()) {
      throw new Error(
        "Distribution files not found. Run `npm run build` before testing."
      );
    }
  });

  describe("React Components", () => {
    test("should have IconBase component", () => {
      const iconBasePath = path.join(srcDir, "react", "icon-base.tsx");
      expect(fs.existsSync(iconBasePath)).toBe(true);

      const content = global.testUtils.readFile(iconBasePath);
      expect(content).toContain("export");
      expect(content).toContain("IconBase");
      expect(content).toContain("forwardRef");
    });

    test("should have proper TypeScript types", () => {
      const typesPath = path.join(srcDir, "react", "types.ts");
      expect(fs.existsSync(typesPath)).toBe(true);

      const content = global.testUtils.readFile(typesPath);
      expect(content).toContain("export interface IconProps");
      expect(content).toContain("size?");
      expect(content).toContain("color?");
      expect(content).toContain("strokeWidth?");
    });

    test("should have generated icon components", () => {
      const iconsDir = path.join(srcDir, "react", "icons");
      expect(fs.existsSync(iconsDir)).toBe(true);

      const iconFiles = fs
        .readdirSync(iconsDir)
        .filter((f) => f.endsWith(".tsx"));
      expect(iconFiles.length).toBeGreaterThan(200); // Should have most of the 250 icons

      const heartIconPath = path.join(iconsDir, "Heart.tsx");
      if (fs.existsSync(heartIconPath)) {
        const content = global.testUtils.readFile(heartIconPath);
        expect(content).toContain("export const HeartIcon");
        expect(content).toContain("forwardRef");
        expect(content).toContain("IconBase");
      }
    });

    test("should export all components from index", () => {
      const indexPath = path.join(srcDir, "react", "index.ts");
      expect(fs.existsSync(indexPath)).toBe(true);

      const content = global.testUtils.readFile(indexPath);
      expect(content).toContain("export { IconBase }");
      expect(content).toContain("export type { IconProps }");
      expect(content).toContain("export { HeartIcon }");

      const exports = content.match(/export \{ \w+Icon \}/g) || [];
      expect(exports.length).toBeGreaterThan(200);
    });
  });

  describe("Vue Components", () => {
    test("should have IconBase component", () => {
      const iconBasePath = path.join(srcDir, "vue", "icon-base.ts");
      expect(fs.existsSync(iconBasePath)).toBe(true);

      const content = global.testUtils.readFile(iconBasePath);
      expect(content).toContain("export const IconBase");
      expect(content).toContain("defineComponent");
      expect(content).toContain("iconBaseProps");
    });

    test("should have optimized shared props", () => {
      const iconBasePath = path.join(srcDir, "vue", "icon-base.ts");
      const content = global.testUtils.readFile(iconBasePath);

      expect(content).toContain("export const iconBaseProps");
      expect(content).toContain("size:");
      expect(content).toContain("color:");
      expect(content).toContain("strokeWidth:");
    });

    test("should have generated icon components using shared props", () => {
      const iconsDir = path.join(srcDir, "vue", "icons");
      expect(fs.existsSync(iconsDir)).toBe(true);

      const iconFiles = fs
        .readdirSync(iconsDir)
        .filter((f) => f.endsWith(".ts"));
      expect(iconFiles.length).toBeGreaterThan(200);

      const heartIconPath = path.join(iconsDir, "Heart.ts");
      if (fs.existsSync(heartIconPath)) {
        const content = global.testUtils.readFile(heartIconPath);
        expect(content).toContain("export const HeartIcon");
        expect(content).toContain("defineComponent");
        expect(content).toContain("iconBaseProps"); // Should use shared props
        expect(content).not.toContain("size: { type: [Number, String]"); // Should NOT duplicate props
      }
    });
  });

  describe("Svelte Components", () => {
    test("should have type definitions", () => {
      const typesPath = path.join(srcDir, "svelte", "types.ts");
      expect(fs.existsSync(typesPath)).toBe(true);

      const content = global.testUtils.readFile(typesPath);
      expect(content).toContain("export interface IconProps");
    });

    test("should have generated Svelte components", () => {
      const iconsDir = path.join(srcDir, "svelte", "icons");
      expect(fs.existsSync(iconsDir)).toBe(true);

      const iconFiles = fs
        .readdirSync(iconsDir)
        .filter((f) => f.endsWith(".svelte"));
      expect(iconFiles.length).toBeGreaterThan(200);
    });

    test("should export components with proper naming", () => {
      const indexPath = path.join(srcDir, "svelte", "index.ts");
      expect(fs.existsSync(indexPath)).toBe(true);

      const content = global.testUtils.readFile(indexPath);
      expect(content).toContain("export { default as HeartIcon }");

      const exports = content.match(/export \{ default as \w+Icon \}/g) || [];
      expect(exports.length).toBeGreaterThan(200);
    });
  });

  describe("Angular Components", () => {
    test("should have type definitions", () => {
      const typesPath = path.join(srcDir, "angular", "types.ts");
      expect(fs.existsSync(typesPath)).toBe(true);

      const content = global.testUtils.readFile(typesPath);
      expect(content).toContain("export interface IconProps");
    });

    test("should have generated Angular components", () => {
      const iconsDir = path.join(srcDir, "angular", "icons");
      expect(fs.existsSync(iconsDir)).toBe(true);

      const iconFiles = fs
        .readdirSync(iconsDir)
        .filter((f) => f.endsWith(".ts"));
      expect(iconFiles.length).toBeGreaterThan(200);
    });

    test("should export components with Component suffix", () => {
      const indexPath = path.join(srcDir, "angular", "index.ts");
      expect(fs.existsSync(indexPath)).toBe(true);

      const content = global.testUtils.readFile(indexPath);
      expect(content).toContain("export { HeartIconComponent }");

      const exports = content.match(/export \{ \w+IconComponent \}/g) || [];
      expect(exports.length).toBeGreaterThan(200);
    });
  });

  describe("Bundle Consistency", () => {
    test("all frameworks should have similar icon counts", () => {
      const frameworks = ["react", "vue", "svelte", "angular"];
      const iconCounts = {};

      frameworks.forEach((framework) => {
        const distFile = path.join(distDir, `${framework}.mjs`);
        const content = global.testUtils.readFile(distFile);
        const iconMatches = content.match(/\w+Icon/g) || [];
        iconCounts[framework] = new Set(iconMatches).size;
      });

      const counts = Object.values(iconCounts);
      const maxCount = Math.max(...counts);
      const minCount = Math.min(...counts);
      const variance = (maxCount - minCount) / maxCount;

      expect(variance).toBeLessThan(0.1); // Less than 10% variance
      expect(minCount).toBeGreaterThan(200); // Should have most icons
    });

    test("all frameworks should have required base exports", () => {
      const frameworks = [
        { name: "react", hasBase: true },
        { name: "vue", hasBase: true },
        { name: "svelte", hasBase: false }, // Svelte doesn't need IconBase
        { name: "angular", hasBase: false }, // Angular uses different pattern
      ];

      frameworks.forEach(({ name, hasBase }) => {
        const distFile = path.join(distDir, `${name}.mjs`);
        const dtsFile = path.join(distDir, `${name}.d.ts`);
        const content = global.testUtils.readFile(distFile);

        expect(content).toMatch(/\w+Icon/);

        if (hasBase) {
          expect(content).toContain("IconBase");
        }

        if (fs.existsSync(dtsFile)) {
          const dtsContent = global.testUtils.readFile(dtsFile);
          expect(dtsContent).toContain("IconProps");
        }
      });
    });
  });

  describe("Component Structure Validation", () => {
    test("React components should follow correct structure", () => {
      const indexContent = global.testUtils.readFile(
        path.join(srcDir, "react", "index.ts")
      );

      expect(indexContent).toContain('export { IconBase } from "./icon-base"');
      expect(indexContent).toContain(
        'export type { IconProps } from "./types"'
      );

      const iconExports =
        indexContent.match(/export \{ \w+Icon \} from "\.\/icons\/\w+"/g) || [];
      expect(iconExports.length).toBeGreaterThan(200);
    });

    test("Vue components should use optimized structure", () => {
      const indexContent = global.testUtils.readFile(
        path.join(srcDir, "vue", "index.ts")
      );

      expect(indexContent).toContain('export { IconBase } from "./icon-base"');
      expect(indexContent).toContain(
        'export type { IconProps } from "./types"'
      );

      const iconExports =
        indexContent.match(/export \{ \w+Icon \} from "\.\/icons\/\w+"/g) || [];
      expect(iconExports.length).toBeGreaterThan(200);
    });
  });
});
