import React from 'react';
import { render, screen } from '@testing-library/react';
import Explanation from '.';

const explanationText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const setup = () => render(<Explanation />);
describe('The Explanation component is rendered', () => {
	test('The Explanation is drawed on the document', () => {
		setup();
		expect(screen.getByTestId('explanation-text')).toBeInTheDocument();
	});
	test('The Explanation text matches text property', () => {
		render(<Explanation>{explanationText}</Explanation>);
		expect(
			screen.getByText(/Lorem Ipsum is simply dummy text of the printing and typesetting industry./i)
		).toBeInTheDocument();
	});
});
