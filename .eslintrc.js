module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'sort-imports': 2,
  },
}
