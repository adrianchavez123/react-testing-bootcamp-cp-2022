import React from 'react';
import { ExplanationContext } from './explanation-styles';

export const ContentDescription = ({ children }) => {
	return <ExplanationContext data-testid='explanation-text'>{children}</ExplanationContext>;
};

export default ContentDescription;
