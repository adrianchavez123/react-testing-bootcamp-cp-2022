import styled from 'styled-components';

export const ImageContainerStyles = styled.div`
	width: 100%;
	height: 100%;
	background-color: #b3005e;
	border: 4px solid #b3005e;
	border-radius: 3%;
	position: relative;
`;

export const Image = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;

export const ImageDescription = styled.p`
	color: #fff;
	font-size: 2rem;
	position: absolute;
	right: 0.1rem;
	bottom: 0.1rem;
	text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
