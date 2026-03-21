import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "no-constant-binary-expression": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSAsExpression > TSAnyKeyword",
        message: "Do not use 'as any'. Model the type explicitly.",
      },
      {
        selector: "TSTypeAssertion > TSAnyKeyword",
        message: "Do not cast to 'any'. Model the type explicitly.",
      },
      {
        selector: "LogicalExpression[operator='||'] > ArrayExpression.right",
        message: "Do not use empty array fallbacks unless they are explicit product behavior.",
      },
      {
        selector: "LogicalExpression[operator='||'] > ObjectExpression.right",
        message: "Do not use empty object fallbacks unless they are explicit product behavior.",
      },
      {
        selector: "LogicalExpression[operator='||'] > Literal.right[value='']",
        message: "Do not use empty string fallbacks unless they are explicit product behavior.",
      },
      {
        selector: "LogicalExpression[operator='??'] > ArrayExpression.right",
        message: "Do not use empty array fallbacks unless they are explicit product behavior.",
      },
      {
        selector: "LogicalExpression[operator='??'] > ObjectExpression.right",
        message: "Do not use empty object fallbacks unless they are explicit product behavior.",
      },
      {
        selector: "LogicalExpression[operator='??'] > Literal.right[value='']",
        message: "Do not use empty string fallbacks unless they are explicit product behavior.",
      },
    ],
  },
});
