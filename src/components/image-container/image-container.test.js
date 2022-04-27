import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageContainer from '.';

const altText = 'Alt description';
const imageSrc = 'testimage.png';
const setup = () => render(<ImageContainer src={imageSrc} alt={altText} />);
describe('The ImageContainer component is rendered', () => {
	test('The ImageContainer is drawed on the document', () => {
		setup();
		const displayedImage = document.querySelector('img');
		expect(displayedImage.alt).toContain(altText);
	});

	test('The ImageContainer src matches src attribute', () => {
		setup();
		const displayedImage = document.querySelector('img');
		expect(displayedImage.src).toContain(imageSrc);
	});

	test('The ImageContainer is found via alt image attribute', () => {
		setup();
		expect(screen.getByAltText(/Alt description/i)).toBeInTheDocument();
	});
});
