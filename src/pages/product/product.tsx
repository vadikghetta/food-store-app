import { useParams } from 'react-router';

export function Product() {
	const { id } = useParams();
	return (
		<div className="">
			Product page {id}
		</div>
	);
}