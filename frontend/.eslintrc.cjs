module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/strict",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh", "no-relative-import-paths"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

    // Getting the eslint resolver working is left as an exercise to the reader.
    "import/no-unresolved": "off",

    // Uncomment these if you really need to.
    // "@typescript-eslint/ban-ts-comment": "off",
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-non-null-assertion": "off",

    // Avoid bugs.
    "@typescript-eslint/no-shadow": ["error", { ignoreTypeValueShadow: true }],
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "array-callback-return": "error",
    eqeqeq: "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",

    // Stylistic.
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "object-shorthand": ["warn", "properties"],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "import/consistent-type-specifier-style": ["warn", "prefer-top-level"],
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
      },
    ],

    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: false, rootDir: "frontend" },
    ],

    // Disabled because of too many false positives.
    "@typescript-eslint/no-unnecessary-condition": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
