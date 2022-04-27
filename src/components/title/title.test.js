import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '.';

const titleText = "NASA's Astronomy Picture of the Day";
const setup = () => render(<Title />);
describe('The Title component is rendered', () => {
	test('The Title is drawed on the document', () => {
		setup();
		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
	test('The Title text matches text props', () => {
		render(<Title>{titleText}</Title>);
		expect(screen.getByText(/NASA's Astronomy Picture of the Day/i)).toBeInTheDocument();
	});
});
