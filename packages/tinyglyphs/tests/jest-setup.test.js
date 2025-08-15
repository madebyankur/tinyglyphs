describe("Jest Setup Test", () => {
  test("basic test should pass", () => {
    expect(1 + 1).toBe(2);
  });

  test("should have access to Node.js modules", () => {
    const fs = require("fs");
    const path = require("path");

    expect(typeof fs.existsSync).toBe("function");
    expect(typeof path.join).toBe("function");
  });

  test("should be in correct directory", () => {
    const fs = require("fs");
    const path = require("path");

    const packageJsonPath = path.join(process.cwd(), "package.json");
    expect(fs.existsSync(packageJsonPath)).toBe(true);

    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      expect(packageJson.name).toBe("tinyglyphs");
    }
  });

  test("should have dist directory", () => {
    const fs = require("fs");
    const path = require("path");

    const distPath = path.join(process.cwd(), "dist");
    expect(fs.existsSync(distPath)).toBe(true);

    if (fs.existsSync(distPath)) {
      const distFiles = fs.readdirSync(distPath);
      console.log("Dist files found:", distFiles);
      expect(distFiles.length).toBeGreaterThan(0);
    }
  });
});
