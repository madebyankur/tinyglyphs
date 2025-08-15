const fs = require("fs");
const path = require("path");

jest.setTimeout(10000);
global.mockConsole = () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
    jest.spyOn(console, "warn").mockImplementation();
    jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    console.log.mockRestore();
    console.warn.mockRestore();
    console.error.mockRestore();
  });
};

global.testUtils = {
  distDir: path.join(__dirname, "../dist"),
  testTempDir: path.join(__dirname, "../test-temp"),

  hasDistFiles: () => {
    const distDir = global.testUtils.distDir;
    return fs.existsSync(distDir) && fs.readdirSync(distDir).length > 0;
  },

  getFileSize: (filePath) => {
    return fs.existsSync(filePath) ? fs.statSync(filePath).size : 0;
  },

  readFile: (filePath) => {
    return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;
  },

  cleanup: (dir) => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  },

  createTempDir: (dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  },
};
afterAll(() => {
  global.testUtils.cleanup(global.testUtils.testTempDir);
});
