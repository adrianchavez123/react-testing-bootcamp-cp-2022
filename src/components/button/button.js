import React from 'react';
import { StyledButton } from './button.styles';

const Button = ({ children, handleOnClick }) => {
	return <StyledButton onClick={handleOnClick}>{children}</StyledButton>;
};

export default Button;
