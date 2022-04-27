import React from 'react';
export const Footer = ({ children }) => {
	return (
		<footer role='footer' aria-label='Footer'>
			<p>{children}</p>
		</footer>
	);
};

export default Footer;
