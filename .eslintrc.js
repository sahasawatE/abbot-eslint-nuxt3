module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "import/default": ["off"],
    "import/no-named-as-default-member": ["off"],
    "no-irregular-whitespace": ["off"],
    "no-var": ["warn"],
    camelcase: ["off"],
    "comma-dangle": 0,
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
      },
    ],
    "vue/block-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    "vue/component-api-style": [
      "error",
      ["composition", "options", "script-setup"], // "script-setup", "composition", "composition-vue2", or "options"
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    "vue/component-options-name-casing": [
      "error",
      "PascalCase", // "PascalCase" | "kebab-case" | "camelCase"
    ],
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case", // "PascalCase" | "kebab-case" | "camelCase"
      {
        ignores: [],
      },
    ],
    "vue/prop-name-casing": ["error", "camelCase"], // "camelCase" | "snake_case"
    "vue/attributes-order": ["warn"],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/no-v-model-argument": ["off"],
    "vue/valid-v-slot": [
      "off",
      {
        allowModifiers: true,
      },
    ],
    "vue/no-v-for-template-key": ["off"],
  },
};
