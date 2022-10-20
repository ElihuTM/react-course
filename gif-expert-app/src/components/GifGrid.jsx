import { MdDelete } from 'react-icons/md';
import { GifCard } from './';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, onDeleteEvent }) => {

	const {gifs, isLoading} = useFetchGifs( category );

	return (
		<div className='category'>
			<div className='category-title'>
				<h3> {category} </h3>
				<button className="delete_btn"
					onClick={() => onDeleteEvent(category)}>
					<MdDelete/>
				</button>
			</div>

			<div className='category-body'>
				{ isLoading && (<h3> Loading...</h3>) }
				{gifs.map(gif => (
					<GifCard key={gif.id} {...gif}/>
				))}
			</div>
		</div>);
}
