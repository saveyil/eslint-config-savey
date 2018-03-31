module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'curly': ['error', 'multi-line'],
    'func-style': [2, 'expression'],
    'indent': [2,	'space', {'SwitchCase': 1}],
    'keyword-spacing': 2,
    'no-console': 0,
    'no-duplicate-imports': 2,
    'no-empty-function': 2,
    'no-template-curly-in-string': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-undef': 2,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', 'ignoreRestSiblings': false }],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-use-before-define': 2,
    'no-var': 2,
    'object-shorthand': ['error', 'properties'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'quotes': [2,	'single'],
    'rest-spread-spacing': 2,
    'semi': [2,	'never'],
    'space-before-function-paren': [2, {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "ignore"
    }],
    'space-in-parens': 2,
    'template-curly-spacing': 2
  }
}
