import { getMonthNumber, isValidDateFormat, getDateFragments } from './date-utils';

describe('Get month number on MM format (the months on Date api starts with zero)', () => {
	test('adds zero padding', () => {
		expect(getMonthNumber(1)).toBe('02');
	});

	test('retrieves a string number of two digits', () => {
		expect(getMonthNumber(11)).toBe('12');
	});
});

describe('The date value matches the format expected', () => {
	test('a valid date returns true', () => {
		expect(isValidDateFormat('2022-04-20')).toBe(true);
	});

	test('Invalid date throws error', () => {
		expect(() => {
			isValidDateFormat('hello');
		}).toThrow();
	});
});

describe('The date is splitted correctly', () => {
	test('the split returns an array with three elements', () => {
		expect(getDateFragments('2022-04-20')).toEqual(['2022', '04', '20']);
	});
});
