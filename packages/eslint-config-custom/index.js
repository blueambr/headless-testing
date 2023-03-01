module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/no-extraneous-dependencies": "off",
    "no-console": ["warn", { allow: ["error", "info", "warn"] }],
  },
};
