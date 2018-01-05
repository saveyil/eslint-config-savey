module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  rules: {
    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'func-style': [2, 'expression'],
    'no-duplicate-imports': 2,
    'no-template-curly-in-string': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': ['error', 'properties'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'rest-spread-spacing': 2,
    'space-before-function-paren': [2, {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "ignore"
    }],
    'template-curly-spacing': 2
  }
};
