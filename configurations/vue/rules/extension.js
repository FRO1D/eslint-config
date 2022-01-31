const base = require('../../base');
const { extensionFromBase } = require('../../../utils/helpers');

const rulesToExtend = [
	'+array-bracket-newline',
	'+array-bracket-spacing',
	'+arrow-spacing',
	'+block-spacing',
	'+brace-style',
	'camelcase',
	'+comma-dangle',
	'+comma-spacing',
	'+comma-style',
	'+dot-location',
	'+dot-notation',
	'!eqeqeq',
	'+func-call-spacing',
	'+key-spacing',
	'+keyword-spacing',
	'max-len',
	'no-constant-condition',
	'no-empty-pattern',
	'+no-extra-parens',
	'no-irregular-whitespace',
	'no-loss-of-precision',
	'no-restricted-syntax',
	'no-sparse-arrays',
	'no-useless-concat',
	'+object-curly-newline',
	'+object-curly-spacing',
	'+object-property-newline',
	// '!object-shorthand', // TODO: [2022-05-11] Not released yet
	'+operator-linebreak',
	'!prefer-template', // autofix works strange sometimes
	// '+quote-props', // TODO: [2022-05-11] Not released yet
	'+space-in-parens',
	'+space-infix-ops',
	'+space-unary-ops',
	'+template-curly-spacing',
];

module.exports = extensionFromBase({
	prefix: 'vue',
	baseRules: base('bypass').rules,
	rulesToExtend,
});