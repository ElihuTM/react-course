import { useState } from 'react'
import { AddCategory, ListCategories } from './components';

const App = () => {
	const [categories, setCategories] = useState([])

	const onSendEvent = (newCategory) => {
		if(categories.includes(newCategory))
			return;

		setCategories((prev) => [newCategory, ...prev]);
	}

	const onDeleteEvent = (category) => {
		const idxToRemove = categories.indexOf(category);
		if (idxToRemove === -1)
			return;

		setCategories((prev) => [
			...prev.slice(0, idxToRemove),
			...prev.slice(idxToRemove + 1)]);
	}

	return (
		<>
			<main className="main">
				<h1>Giff Expert App</h1>
				<AddCategory onSendEvent={onSendEvent}/>
				<ListCategories categories={categories}
					onDeleteEvent={onDeleteEvent}/>
			</main>

		</>)
}

export default App
