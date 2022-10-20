import { useState } from 'react';

export const AddCategory = ({onSendEvent}) => {
	const [inputCategory, setInputCategory] = useState('');

	const sendEvent = (event) => {
		event.preventDefault();

		if(inputCategory.trim().length === 0)
			return;

		onSendEvent(inputCategory.trim());
		setInputCategory('');
	}

	return (
		<form className="category-form" onSubmit={sendEvent}>
			<div className="category-input-section">
				<label htmlFor="input-category"> New Category </label>
				<input className="category-input-text"
					id="input-category"
					type="text"
					value={inputCategory}
					onChange={({target}) => setInputCategory(target.value)}
					placeholder="Insert new Category"/>
			</div>

			<input className="category-input-submit"
				type="submit"
				value="Add New Category"/>
		</form>
	);
}
