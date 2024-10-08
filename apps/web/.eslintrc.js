/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    "@space-launch-tracking-app/eslint-config",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: [
    "dist/**/*.js",
    "dist/**/*.d.ts",
    ".eslintrc.js",
    "build/**/*",
  ],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
      },
    },
    {
      files: ["*.js"],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

module.exports = config;
