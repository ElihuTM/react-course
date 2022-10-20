export const GifCard = ({title, url}) => {
	return(
		<div className="gif_card">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>);
}
