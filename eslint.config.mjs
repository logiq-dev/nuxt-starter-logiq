// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

export default withNuxt({
  plugins: {
    "unused-imports": eslintPluginUnusedImports,
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",

    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",

    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
});
