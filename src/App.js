import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Loading from './components/Loading';

export default function App() {
	const [loading, setLoading] = useState(true);
	const [name, setName] = useState('');
	const [image, setImage] = useState('');

	useEffect(() => {
		(async function () {
			const response = await fetch('https://randomuser.me/api/');
			const data = await response.json();

			const fetchedName = data.results[0].name;
			const fetchedImage = data.results[0].picture.large;

			setName(fetchedName);
			setImage(fetchedImage);
			setLoading(false);
		})();
	}, [loading]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<Profile name={name} image={image} onClick={() => setLoading(true)} />
			)}
		</>
	);
}
