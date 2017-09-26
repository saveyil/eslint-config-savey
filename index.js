module.exports = {
	extends: [
		'./rules/base',
		'./rules/es6'
	].map(require.resolve)
}
