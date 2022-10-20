export const getGifs = async (category, limit = 10) => {
	const api_key = 'hAghIhievX2NiKHJV79ZUh9TSeBRExJT';
	const search_path = 'https://api.giphy.com/v1/gifs/search';
	const url = `${search_path}?api_key=${api_key}&q=${category}&limit=${limit}`;

	const resp = await fetch(url);
	const {data} = await resp.json();

	const gifs = data.map(img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	return gifs;
};
