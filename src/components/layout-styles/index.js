import styled from 'styled-components';

export const GridLayout = styled.div`
	height: 100vh;
	display: grid;
	padding: 0 2rem;
	grid-template-areas:
		'nav nav'
		'asideLeft asideRight'
		'footer footer';
	grid-template-rows: 0.4fr 1fr;
	grid-template-columns: 60% 1fr;
	gap: 1em;

	@media (max-width: 768px) {
		grid-template-areas:
			'nav'
			'asideLeft'
			'asideRight'
			'footer';
		gap: 0.5em;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	@media (max-width: 960px) {
		grid-template-rows: 0.3fr 1fr;
		grid-template-columns: 70% 1fr;
	}
`;

export const Nav = styled.nav`
	grid-area: nav;
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const AsideLeft = styled.aside`
	grid-area: asideLeft;
	max-width: 50vw;
`;

export const AsideRight = styled.aside`
	grid-area: asideRight;
	font-size: 2rem;
	display: flex;
	overflow-y: auto;
	background-color: #f2f7ff60;
	margin: 0.2rem 0;
	align-content: flex-start;
	opacity: 0.9;
	border: 4px solid #b3005e;
	border-radius: 3%;
	padding: 0.2rem 0.5rem;

	@media (max-width: 768px) {
		min-height: 5em;
	}
`;

export const FooterStyles = styled.footer`
	grid-area: footer;
	display: flex;
	color: #fdbbbd;
	font-size: 1.3rem;
	justify-content: flex-end;
`;
