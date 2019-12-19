module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
		browser: true,
		jest: true
	},
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		'prettier/prettier': ['error'],
		// indent: ['error', 'tab'],
		// "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0, maxEOF: 0 }],
		// "object-curly-spacing": ["error", "always"],
		// quotes: ["error", "single"],
		// "no-debugger": 0,
		// // 'padding-line-between-statements': ["error", { blankLine: "always", prev: "*", next: "return" }],
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
		// 'object-curly-newline': [
		// 	'error',
		// 	{
		// 		ObjectPattern: 'never',
		// 		ImportDeclaration: 'never',
		// 		ExportDeclaration: { multiline: true, minProperties: 3 }
		// 	}
		// ]
		// semi: ["error", "always"],
		// "prefer-const": "error",
	}
};
