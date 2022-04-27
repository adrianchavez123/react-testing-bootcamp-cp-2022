import { getMonthNumber } from './date-utils';

describe('Get month number on MM format (the months on Date api starts with zero)', () => {
	test('adds zero padding', () => {
		expect(getMonthNumber(1)).toBe('02');
	});

	test('retrieves a string number of two digits', () => {
		expect(getMonthNumber(11)).toBe('12');
	});
});
