import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

const footerText = 'Project created during Wizeline Academy React Testing Bootcamp';
const setup = () => render(<Footer />);
describe('The Footer component is rendered', () => {
	test('The Footer is drawed on the document', () => {
		setup();
		expect(screen.getByRole('footer')).toBeInTheDocument();
	});
	test('The Footer text matches text props', () => {
		render(<Footer>{footerText}</Footer>);
		expect(screen.getByText(/Project created during Wizeline Academy React Testing Bootcamp/i)).toBeInTheDocument();
	});
});
