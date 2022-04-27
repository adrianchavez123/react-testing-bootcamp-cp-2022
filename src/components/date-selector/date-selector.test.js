import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateSelector from '.';

const setup = () => render(<DateSelector />);
describe('The DateSelector component is rendered', () => {
	test('The DateSelector is drawed on the document', () => {
		setup();

		expect(screen.getByLabelText('Select a date')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /refresh image/i })).toBeInTheDocument();
	});

	test('The input value matches date property', () => {
		const testDate = '2022-04-20';
		render(<DateSelector date={testDate} />);
		expect(screen.getByLabelText('Select a date')).toHaveValue(testDate);
	});
	test('The button is clickable', () => {
		setup();
		const button = screen.getByRole('button');
		userEvent.click(button);
	});
});
