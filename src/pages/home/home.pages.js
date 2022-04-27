import React, { useEffect, useState } from 'react';
import Title from '../../components/title';
import Footer from '../../components/footer';
import Explanation from '../../components/explanation';
import ImageContainer from '../../components/image-container';
import DateSelector from '../../components/date-selector/date-selector';
import EmbededVideo from '../../components/embedded-video';
import { GridLayout, Nav, AsideLeft, AsideRight, FooterStyles } from '../../components/layout-styles';
import { getMonthNumber } from '../../utils/date-utils';

const MEDIA_TYPES = {
	video: 'video',
	image: 'image',
};
const initialPictureState = {
	title: 'Title not defined',
	explanation: '',
	url: '',
	date: `${new Date().getFullYear()}-${getMonthNumber(new Date().getMonth())}-${new Date().getDate()}`,
};

const Home = () => {
	const [media, setMedia] = useState(initialPictureState);
	const [isLoading, setIsLoading] = useState(true);
	const [mediaType, setMediaType] = useState(MEDIA_TYPES.image);
	useEffect(() => {
		fetchPicture();
	}, []);

	const handleDateChange = (e) => {
		const newPicture = { ...media, date: e.target.value };
		setMedia(newPicture);
	};

	const handleRefeshimage = () => {
		fetchPicture();
	};

	const fetchPicture = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(
				`${process.env.REACT_APP_NASA_APOD_URL}?api_key=${process.env.REACT_APP_NASA_TOKEN}&date=${media.date}`
			);
			const data = await response.json();
			setIsLoading(false);
			const { title, explanation, url, media_type } = data;
			if (media_type === MEDIA_TYPES.video) {
				setMediaType(media_type);
				setMedia({ ...media, title, explanation, url });
			} else if (media_type === MEDIA_TYPES.image) {
				setMedia({ ...media, title, explanation, url });
				setMediaType(media_type);
			} else {
				throw new Error(`media type '${media_type}' not supported.`);
			}
		} catch (e) {
			setMedia({
				title: 'no found',
				explanation: 'Something went wrong, please try again.',
				url: '',
				date: media.date,
			});
			setIsLoading(false);
			console.log(e);
		}
	};
	return (
		<GridLayout>
			<Nav>
				<Title>NASA&apos;s Astronomy Picture of the Day</Title>
				<DateSelector date={media?.date} handleDateChange={handleDateChange} handleRefeshimage={handleRefeshimage} />
			</Nav>

			<AsideLeft>
				{isLoading ?? 'loading'}
				{mediaType === MEDIA_TYPES.image ? (
					<ImageContainer src={media?.url} alt={media?.title} />
				) : (
					<div>
						<EmbededVideo url={media?.url} />
					</div>
				)}
			</AsideLeft>
			<AsideRight>
				<Explanation>{media?.explanation}</Explanation>
			</AsideRight>

			<FooterStyles>
				<Footer>Project created during Wizeline Academy React Testing Bootcamp</Footer>
			</FooterStyles>
		</GridLayout>
	);
};

export default Home;
