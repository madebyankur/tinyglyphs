const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

describe("Build Process Validation", () => {
  const packageDir = path.dirname(__dirname);
  const distDir = global.testUtils.distDir;
  const srcDir = path.join(packageDir, "src");

  describe("Build Configuration", () => {
    test("tsup.config.ts should have tree-shaking optimizations", () => {
      const configPath = path.join(packageDir, "tsup.config.ts");
      expect(fs.existsSync(configPath)).toBe(true);

      const content = global.testUtils.readFile(configPath);
      expect(content).toContain("treeshake: true");
      expect(content).toContain("splitting: true");
      expect(content).toContain("minify: true");
    });

    test("package.json should have proper build configuration", () => {
      const packageJsonPath = path.join(packageDir, "package.json");
      const packageJson = JSON.parse(
        global.testUtils.readFile(packageJsonPath)
      );

      expect(packageJson.sideEffects).toBe(false);
      expect(packageJson.type).toBe("module");
      expect(packageJson.exports).toBeDefined();

      const frameworks = ["react", "vue", "svelte", "angular"];
      frameworks.forEach((framework) => {
        expect(packageJson.exports[`./${framework}`]).toBeDefined();
        expect(packageJson.exports[`./${framework}`].import).toContain(`.mjs`);
        expect(packageJson.exports[`./${framework}`].require).toContain(`.js`);
      });
    });

    test("TypeScript configuration should be optimized", () => {
      const tsconfigPath = path.join(packageDir, "tsconfig.json");
      expect(fs.existsSync(tsconfigPath)).toBe(true);

      const tsconfig = JSON.parse(global.testUtils.readFile(tsconfigPath));
      expect(tsconfig.compilerOptions.target).toBe("ES2020");
      expect(tsconfig.compilerOptions.module).toBe("ESNext");
      expect(tsconfig.compilerOptions.strict).toBe(true);
      expect(tsconfig.compilerOptions.declaration).toBe(true);
    });
  });

  describe("Build Output Validation", () => {
    test("should have all required distribution files", () => {
      const expectedFiles = [
        "react.mjs",
        "react.js",
        "react.d.ts",
        "vue.mjs",
        "vue.js",
        "vue.d.ts",
        "svelte.mjs",
        "svelte.js",
        "angular.mjs",
        "angular.js",
        "angular.d.ts",
      ];

      expectedFiles.forEach((file) => {
        const filePath = path.join(distDir, file);
        expect(fs.existsSync(filePath)).toBe(true);

        const content = global.testUtils.readFile(filePath);
        expect(content.trim().length).toBeGreaterThan(0);
      });
    });

    test("distribution files should have proper module format", () => {
      const mjsFile = path.join(distDir, "react.mjs");
      const cjsFile = path.join(distDir, "react.js");

      const mjsContent = global.testUtils.readFile(mjsFile);
      const cjsContent = global.testUtils.readFile(cjsFile);

      expect(mjsContent).toMatch(/export\{/);
      expect(mjsContent).not.toContain("module.exports");

      expect(cjsContent).toMatch(/(module\.exports|exports\.)/);
      expect(cjsContent).not.toMatch(/^export\{/m);
    });

    test("TypeScript definitions should be comprehensive", () => {
      const frameworks = ["react", "vue", "svelte", "angular"];

      frameworks.forEach((framework) => {
        const dtsPath = path.join(distDir, `${framework}.d.ts`);

        if (framework === "svelte") {
          return;
        }

        const content = global.testUtils.readFile(dtsPath);

        expect(content).toBeTruthy();

        const hasInterface =
          content.includes("interface IconProps") ||
          content.includes("IconProps") ||
          content.includes("React.ComponentProps");
        expect(hasInterface).toBe(true);

        expect(content).toMatch(/\w+Icon/);

        expect(content).toContain("declare");
      });
    });
  });

  describe("Source File Structure", () => {
    test("should have consistent source structure", () => {
      const frameworks = ["react", "vue", "svelte", "angular"];

      frameworks.forEach((framework) => {
        const frameworkDir = path.join(srcDir, framework);
        expect(fs.existsSync(frameworkDir)).toBe(true);

        expect(fs.existsSync(path.join(frameworkDir, "index.ts"))).toBe(true);
        expect(fs.existsSync(path.join(frameworkDir, "types.ts"))).toBe(true);
        expect(fs.existsSync(path.join(frameworkDir, "icons"))).toBe(true);

        const iconsDir = path.join(frameworkDir, "icons");
        const iconFiles = fs.readdirSync(iconsDir);
        expect(iconFiles.length).toBeGreaterThan(200);
      });
    });

    test("icon files should follow naming conventions", () => {
      const reactIconsDir = path.join(srcDir, "react", "icons");
      const iconFiles = fs.readdirSync(reactIconsDir);

      iconFiles.forEach((file) => {
        expect(file).toMatch(/^[A-Z][a-zA-Z0-9]*\.tsx$/);

        const content = global.testUtils.readFile(
          path.join(reactIconsDir, file)
        );
        const iconName = file.replace(".tsx", "Icon");

        expect(content).toContain(`export const ${iconName}`);
        expect(content).toContain("forwardRef");
        expect(content).toContain("IconBase");
      });
    });
  });

  describe("Icon SVG Processing", () => {
    test("icons directory should have all SVG files", () => {
      const iconsDir = path.join(packageDir, "../../icons");
      expect(fs.existsSync(iconsDir)).toBe(true);

      const svgFiles = fs
        .readdirSync(iconsDir)
        .filter((f) => f.endsWith(".svg"));
      expect(svgFiles.length).toBeGreaterThan(240); // Should be close to 250

      const expectedIcons = [
        "Heart.svg",
        "Home.svg",
        "User.svg",
        "Settings.svg",
      ];
      expectedIcons.forEach((icon) => {
        if (svgFiles.includes(icon)) {
          const svgPath = path.join(iconsDir, icon);
          const svgContent = global.testUtils.readFile(svgPath);

          expect(svgContent).toContain("<svg");
          expect(svgContent).toContain("</svg>");
          expect(svgContent).toMatch(/viewBox=["']0 0 16 16["']/);
        }
      });
    });

    test("generated components should match SVG files", () => {
      const iconsDir = path.join(packageDir, "../../icons");
      const reactIconsDir = path.join(srcDir, "react", "icons");

      const svgFiles = fs
        .readdirSync(iconsDir)
        .filter((f) => f.endsWith(".svg"))
        .map((f) => f.replace(".svg", ""));

      const reactFiles = fs
        .readdirSync(reactIconsDir)
        .filter((f) => f.endsWith(".tsx"))
        .map((f) => f.replace(".tsx", ""));

      const matchingFiles = svgFiles.filter((svg) => reactFiles.includes(svg));
      const matchRatio = matchingFiles.length / svgFiles.length;

      expect(matchRatio).toBeGreaterThan(0.9); // At least 90% should match
    });
  });

  describe("Performance Validation", () => {
    test("should not have common performance anti-patterns", () => {
      const frameworks = ["react", "vue", "svelte", "angular"];

      frameworks.forEach((framework) => {
        const distFile = path.join(distDir, `${framework}.mjs`);
        const content = global.testUtils.readFile(distFile);

        expect(content).not.toContain("style={{");
        expect(content).not.toContain('style="');

        expect(content).not.toMatch(
          /data:image\/svg\+xml;base64,[A-Za-z0-9+/]{1000,}/
        );

        expect(content).toMatch(/export\{.*\}/);
      });
    });

    test("bundle should have reasonable repetition patterns", () => {
      const reactDist = global.testUtils.readFile(
        path.join(distDir, "react.mjs")
      );

      const commonPatterns = ["forwardRef", "IconBase", "createElement", "jsx"];

      commonPatterns.forEach((pattern) => {
        const matches = reactDist.match(new RegExp(pattern, "g")) || [];
        expect(matches.length).toBeLessThan(1500);
      });
    });
  });

  describe("Build Process Integrity", () => {
    test("build script should complete without errors", () => {
      expect(global.testUtils.hasDistFiles()).toBe(true);
    });

    test("all framework builds should be consistent", () => {
      const frameworks = ["react", "vue", "svelte", "angular"];
      const stats = {};

      frameworks.forEach((framework) => {
        const mjsPath = path.join(distDir, `${framework}.mjs`);
        const cjsPath = path.join(distDir, `${framework}.js`);
        const dtsPath = path.join(distDir, `${framework}.d.ts`);

        stats[framework] = {
          mjsSize: fs.statSync(mjsPath).size,
          cjsSize: fs.statSync(cjsPath).size,
          dtsSize: framework === "svelte" ? 0 : fs.statSync(dtsPath).size, // Svelte doesn't have d.ts
          exports: (
            global.testUtils.readFile(mjsPath).match(/export\{[^}]+\}/g) || []
          ).length,
        };
      });

      const exportCounts = Object.values(stats).map((s) => s.exports);
      const maxExports = Math.max(...exportCounts);
      const minExports = Math.min(...exportCounts);
      const variance = (maxExports - minExports) / maxExports;

      expect(variance).toBeLessThan(0.2); // Less than 20% variance
    });
  });
});
