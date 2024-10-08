/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@space-launch-tracking-app/eslint-config"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  ignorePatterns: [
    "dist/**/*.js",
    "dist/**/*.d.ts",
    ".eslintrc.js",
    "src/**/*.js",
  ],
};

module.exports = config;
