import React from 'react';
import { ImageContainerStyles, Image } from './image-container-styles';

export const ImageContainer = ({ src, alt }) => {
	return (
		<ImageContainerStyles>
			<Image src={src} alt={alt} />
		</ImageContainerStyles>
	);
};

export default ImageContainer;
