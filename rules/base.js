module.exports = {
	extends: 'eslint:recommended',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	parserOptions: {
		sourceType: 'module',
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
		'no-undef': 2,
		'no-console': 0,
		'no-use-before-define': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multi-spaces': 2,
		'space-before-function-paren': [2, 'never']
	},
	plugins: [
		'html'
	]
}
