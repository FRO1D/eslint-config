module.exports = {
	rules: {
		// Require `emits` option with name triggered by `$emit()`
		// https://eslint.vuejs.org/rules/require-explicit-emits.html
		'vue/require-explicit-emits': ['error', {
			allowProps: false,
		}],

		// Enforce v-on event naming style on custom components in template
		// (safely autofixable for `Vue3`)
		// https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
		'+vue/v-on-event-hyphenation': ['error', 'always', {
			autofix: true,
		}],
	},
};
