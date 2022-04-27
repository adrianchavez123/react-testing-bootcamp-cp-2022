import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '.';
import userEvent from '@testing-library/user-event';

const setup = () => render(<Home />);
describe('Displays Home page', () => {
	test('The header is visible on the home page.', async () => {
		setup();

		expect(screen.getByRole('heading', { name: /NASA's Astronomy Picture of the Day/i })).toBeInTheDocument();
	});

	test('The footer should be present on the app.', async () => {
		setup();

		expect(screen.getByText(/Project created during Wizeline Academy React Testing Bootcamp/i)).toBeInTheDocument();
	});

	test("the user clicks the button to see today's picture", async () => {
		setup();

		const todayPictureBtn = screen.getByRole('button', { name: /Today's picture/i });

		expect(todayPictureBtn).toBeEnabled();

		userEvent.click(todayPictureBtn);

		await waitFor(() => expect(todayPictureBtn).toBeEnabled(), { timeout: 5000 });
	});

	test('the user chooses a different date', async () => {
		setup();

		const dateInput = screen.getByLabelText('Select a date');

		userEvent.type(dateInput, '2022-04-12');

		const image = await screen.findByAltText(/N11: Star Clouds of the LMC/i);

		expect(
			screen.getByText(/Massive stars, abrasive winds, mountains of dust, and energetic light sculpt one of the/i)
		).toBeInTheDocument();
	});

	test('the user chooses a date in the future', async () => {
		setup();

		const dateInput = screen.getByLabelText('Select a date');

		userEvent.type(dateInput, '2025-04-12');

		const warning = await screen.findByText(/Invalid date./i);

		expect(screen.getByText(/Invalid date./i)).toBeInTheDocument();
	});
});
