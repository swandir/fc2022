module.exports = {
  plugins: ["@typescript-eslint", "react-hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./**/tsconfig*.json",
    // Needed for project references
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
  },
  overrides: [
    // Make `eslint .` check TS files too
    { files: ["**/*.{ts,tsx}"] },
  ],
  rules: {
    "@typescript-eslint/no-unnecessary-condition": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};
