module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "import"
  ],
  rules: {
    // תוכל להוסיף חוקים מותאמים אישית כאן במידת הצורך
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
