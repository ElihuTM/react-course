import { GifGrid } from './';

export const ListCategories = ({ categories, onDeleteEvent }) => {
	return (
		<div className='list_categories'>
			{categories.map((category) => (
				<GifGrid key={category} category={category} onDeleteEvent={onDeleteEvent}/>
			))}
		</div>);
}
