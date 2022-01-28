const { setupAutofixableTests } = require('./tests-utils');

describe('Autofixable mechanics', () => {
	// Common
	it('Processes all rules marked as `autofixable` with `+` sign', () => {
		const { autofixableEntries, autofixedEntries } = setupAutofixableTests('warn');

		expect(autofixableEntries).toHaveLength(autofixedEntries.length);
	});

	// Autofixable to `warn`
	describe('`Autofixable rules to warn` mechanic', () => {
		it('Doesn\'t set severity to `warn` if base rule severity is `off`', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('warn');

			const offRules = autofixableEntries
				.filter(([rule, value]) => (Array.isArray(value) ? value[0] === 'off' : value === 'off'));

			const autofixed = Object.fromEntries(autofixedEntries);
			offRules.forEach(([rule, value]) => {
				expect(autofixed[rule]).toStrictEqual(value);
			});
		});

		it('Sets severity to `warn` for string rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('warn');

			const stringWarnRules = autofixableEntries
				.filter(([rule, value]) => !Array.isArray(value) && value !== 'off')
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule]).toBe('warn');
			});
		});

		it('Sets severity to `warn` for array rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('warn');

			const stringWarnRules = autofixableEntries
				.filter(([rule, value]) => Array.isArray(value) && value[0] !== 'off')
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule][0]).toBe('warn');
			});
		});
	});

	// Autofixable to `off`
	describe('`Autofixable rules to off` mechanic', () => {
		it('Sets severity to `off` for string rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('off');

			const stringWarnRules = autofixableEntries
				.filter(([rule, value]) => !Array.isArray(value))
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule]).toBe('off');
			});
		});

		it('Sets severity to `off` for array rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('off');

			const stringWarnRules = autofixableEntries
				.filter(([rule, value]) => Array.isArray(value))
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule]).toBe('off');
			});
		});
	});
});