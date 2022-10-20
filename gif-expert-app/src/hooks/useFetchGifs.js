import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs.js';

export const useFetchGifs = category => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getGifs(category)
			.then(data => {
				setGifs(data);
				setIsLoading(false);
			})
			.catch(console.error);
	}, []);

	return {gifs, isLoading};
};
