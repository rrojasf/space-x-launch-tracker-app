/** @type {import("eslint").Linter.Config} */
const config = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    "dist/**/*.js",
    "dist/**/*.d.ts",
    ".eslintrc.js",
    "jest.config.js",
  ],
};

module.exports = config;
