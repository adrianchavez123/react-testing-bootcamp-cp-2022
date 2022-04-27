import React from 'react';
import { render, screen } from '@testing-library/react';
import EmbededVideo from '.';

const setup = () => render(<EmbededVideo />);
describe('The EmbededVideo component is rendered', () => {
	test('The EmbededVideo is drawed on the document', () => {
		setup();
		expect(screen.getByTitle('Embedded youtube')).toBeInTheDocument();
	});
});
