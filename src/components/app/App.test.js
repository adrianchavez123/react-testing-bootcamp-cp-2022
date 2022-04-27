import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const setup = () => render(<App />);
describe('Displays Home page', () => {
	test('The header is visible on the home page.', () => {
		setup();

		expect(screen.getByRole('heading', { name: /NASA's Astronomy Picture of the Day/i })).toBeInTheDocument();
	});

	test('The input date input is in the document.', () => {
		setup();

		expect(screen.getByLabelText('Select a date')).toBeInTheDocument();
	});

	test('The footer should be present on the app.', () => {
		setup();

		expect(screen.getByText(/Project created during Wizeline Academy React Testing Bootcamp/i)).toBeInTheDocument();
	});
});
