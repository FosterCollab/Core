/** @type {import("eslint").Linter.Config} */
const config = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:@tanstack/eslint-plugin-query/recommended",
	],
	rules: {
		// These opinionated rules are enabled in stylistic-type-checked above.
		// Feel free to reconfigure them to your own preference.
		"@typescript-eslint/array-type": "off",
		"@typescript-eslint/consistent-type-definitions": "off",

		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		
		// Added rules
		"quotes": ["warn", "double", { "avoidEscape": true }],
		"indent": ["warn", "tab", { "SwitchCase": 1 }],
		"@typescript-eslint/indent": ["warn", "tab", { "SwitchCase": 1, "flatTernaryExpressions": true }],
	},
};

module.exports = config;
