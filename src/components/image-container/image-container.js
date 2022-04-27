import React from 'react';
import { ImageContainerStyles, Image, ImageDescription } from './image-container-styles';

export const ImageContainer = ({ src, alt, date }) => {
	return (
		<ImageContainerStyles>
			<ImageDescription>
				{alt} - {date}
			</ImageDescription>
			<Image src={src} alt={alt} />
		</ImageContainerStyles>
	);
};

export default ImageContainer;
