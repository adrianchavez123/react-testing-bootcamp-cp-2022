import React, { useState } from 'react';
import Title from '../../components/title';
import Footer from '../../components/footer';
import Explanation from '../../components/explanation';
import ImageContainer from '../../components/image-container';
import DateSelector from '../../components/date-selector/date-selector';
import EmbededVideo from '../../components/embedded-video';
import { GridLayout, Nav, AsideLeft, AsideRight, FooterStyles } from '../../components/layout-styles';
import { getMonthNumber } from '../../utils/date-utils';
import useFetch from '../../hooks/use-fetch';

const MEDIA_TYPES = {
	video: 'video',
	image: 'image',
};

const Home = () => {
	const [date, setDate] = useState(
		`${new Date().getFullYear()}-${getMonthNumber(new Date().getMonth())}-${new Date().getDate()}`
	);
	const { status, data } = useFetch(date);
	const { title, explanation, url, media_type } = data;

	const handleDateChange = (e) => {
		const [year, month, day] = e.target.value.split('-');
		if (isNaN(year) || isNaN(month) || isNaN(day)) {
			console.log('not a number');
			return;
		}
		const dateSelected = new Date(year, Number(month) - 1, day);
		if (dateSelected > new Date()) {
			return;
		}
		setDate(e.target.value);
	};

	const handleRefeshimage = () => {
		setDate(`${new Date().getFullYear()}-${getMonthNumber(new Date().getMonth())}-${new Date().getDate()}`);
	};

	return (
		<GridLayout>
			<Nav>
				<Title>NASA&apos;s Astronomy Picture of the Day</Title>
				<DateSelector date={date} handleDateChange={handleDateChange} handleRefeshimage={handleRefeshimage} />
			</Nav>

			<AsideLeft>
				{status === 'loading' ?? 'loading'}
				{media_type === MEDIA_TYPES.image ? (
					<ImageContainer src={url} alt={title} date={date} />
				) : (
					<div>
						<EmbededVideo url={url} />
					</div>
				)}
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
