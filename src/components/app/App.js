import React from 'react';
import bg from '../../images/bg.jpg';
import Home from '../../pages/home/home.pages';

const App = () => {
	return (
		<>
			<img src={bg} id='bg' alt='background'></img>
			<Home />
		</>
	);
};

export default App;
