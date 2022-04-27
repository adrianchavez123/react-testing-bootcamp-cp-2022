import { useState, useEffect } from 'react';
const cache = {};

const useFetch = (date) => {
	const url = `${process.env.REACT_APP_NASA_APOD_URL}?api_key=${process.env.REACT_APP_NASA_TOKEN}&date=${date}`;
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);

	useEffect(() => {
		if (!date) return;

		const fetchData = async () => {
			setStatus('loading');
			if (cache[url]) {
				const data = cache[url];
				setData(data);
				setStatus('');
			} else {
				const response = await fetch(url);
				const data = await response.json();
				cache[url] = data;
				setData(data);
				setStatus('');
			}
		};

		fetchData();
	}, [url]);

	return { status, data };
};

export default useFetch;
