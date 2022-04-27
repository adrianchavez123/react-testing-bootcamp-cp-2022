import React, { useState } from 'react';
import Title from '../../components/title';
import Footer from '../../components/footer';
import Explanation from '../../components/explanation';
import ImageContainer from '../../components/image-container';
import DateSelector from '../../components/date-selector/date-selector';
import EmbededVideo from '../../components/embedded-video';
import { GridLayout, Nav, AsideLeft, AsideRight, FooterStyles, WarningText } from '../../components/layout-styles';
import { getMonthNumber, isValidDateFormat, getDateFragments } from '../../utils/date-utils';
import useFetch from '../../hooks/use-fetch';

const MEDIA_TYPES = {
	video: 'video',
	image: 'image',
};

const Home = () => {
	const [date, setDate] = useState(
		`${new Date().getFullYear()}-${getMonthNumber(new Date().getMonth())}-${new Date().getDate()}`
	);
	const [warning, setWaring] = useState(null);
	const { status, data } = useFetch(date);
	const { title, explanation, url, media_type } = data;

	const handleDateChange = (e) => {
		try {
			if (isValidDateFormat(e.target.value)) {
				const [year, month, day] = getDateFragments(e.target.value);
				const dateSelected = new Date(year, Number(month) - 1, day);
				if (dateSelected > new Date()) {
					console.log('aqiu');
					setWaring('Invalid date.');
					return;
				}
				setDate(e.target.value);
				setWaring(null);
			}
		} catch (err) {
			setWaring('There was an error, please try again.');
		}
	};

	const handleRefeshimage = () => {
		setDate(`${new Date().getFullYear()}-${getMonthNumber(new Date().getMonth())}-${new Date().getDate()}`);
	};

	return (
		<GridLayout>
			<Nav>
				<Title>NASA&apos;s Astronomy Picture of the Day</Title>
				<DateSelector date={date} handleDateChange={handleDateChange} handleRefeshimage={handleRefeshimage} />
				{warning && <WarningText>{warning}</WarningText>}
			</Nav>

			<AsideLeft>
				{status === 'loading' ?? 'loading'}
				{media_type === MEDIA_TYPES.image ? <ImageContainer src={url} alt={title} date={date} /> : null}
				{media_type === MEDIA_TYPES.video ? (
					<div>
						<EmbededVideo url={url} />
					</div>
				) : null}
			</AsideLeft>
			<AsideRight>
				<Explanation>{explanation}</Explanation>
			</AsideRight>

			<FooterStyles>
				<Footer>Project created during Wizeline Academy React Testing Bootcamp</Footer>
			</FooterStyles>
		</GridLayout>
	);
};

export default Home;
