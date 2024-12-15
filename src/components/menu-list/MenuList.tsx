

import ProductCard from '../product-card/product-card';
import styles from './MenuList.module.css';
import { MenuListProps } from './Menulist.props';


export function MenuList({ products }: MenuListProps) {
	return <div className={styles.wrapper}>{products.map(p => (
		<ProductCard
			key={p.id}
			id={p.id}
			name={p.name}
			description={p.ingredients.join(', ')}
			rating={p.rating}
			price={p.price}
			image={p.image}
		/>
	))}
	</div>;
}