import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    ignores: ["**/.next/**", "node_modules", "dist", "build", "coverage", "front/next-env.d.ts"],
  },
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
      
      "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
      "no-console": "warn",
      "no-unused-vars": "off",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/order": "off"
    },
  }
];
