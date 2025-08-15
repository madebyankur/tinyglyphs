module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.(test|spec).js"],
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
    "scripts/**/*.{js,ts}",
    "!src/**/*.d.ts",
    "!src/**/types.ts",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  testTimeout: 10000,
  verbose: true,
};
