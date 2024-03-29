module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base', 'prettier',
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-debugger": "off",
    "no-console": "off",
    "lines-between-class-members": "off",
  },
  babel: {},
};
