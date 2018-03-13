module.exports = {
	extends: 'eslint:recommended',
	env: {
		browser: true,
		commonjs: true,
		node: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		}
	},
	rules: {
		'indent': [2,	'tab', {'SwitchCase': 1}],
		'quotes': [2,	'single'],
		'semi': [2,	'never'],
		'no-empty-function': 2,
		'no-unused-vars': ['error', { vars: 'all', args: 'after-used', 'ignoreRestSiblings': false }],
		'no-undef': 2,
		'no-console': 0,
		'no-use-before-define': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multi-spaces': 2,
		'curly': ['error', 'multi-line'],
		'space-in-parens': 2,
		'keyword-spacing': 2
	},
	plugins: [
		'html'
	]
}
