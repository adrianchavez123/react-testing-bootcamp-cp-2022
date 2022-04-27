import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

const setup = () => render(<Button />);
describe('The button component is rendered', () => {
	test('The button is drawed on the document', () => {
		setup();

		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	test('The button text matches its property', () => {
		render(<Button>Hello!!</Button>);

		expect(screen.getByRole('button', { name: /hello!!/i })).toBeInTheDocument();
	});
	test('The button is clickable', () => {
		setup();
		const button = screen.getByRole('button');
		userEvent.click(button);
	});
});
