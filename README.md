# ESLint-Config-abbot-nuxt3

![eslint-config-abbot-nuxt3](https://abbot.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_abbot.37eb842b.png&w=1920&q=75)

# ⚠️Before You Install This

> This ESlint rules is for abbot nuxt3 and TS project.

# Installation

```bash
npm i --save-dev eslint eslint-config-abbot-nuxt3
# or if you're using yarn
yarn add -D eslint eslint-config-abbot-nuxt3
```

# Usage

In your `eslintrc` file you can extend like this

```js
module.exports = {
  extends: ["abbot-nuxt3"],
};
```

# The ESLint rules that I used here

```js
 rules: {
    "import/default": ["off"],
    "no-irregular-whitespace": ["off"],
    "no-var": ["warn"],
    camelcase: ["off"],
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
      ["composition", "options"], // "script-setup", "composition", "composition-vue2", or "options"
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
  },
```
