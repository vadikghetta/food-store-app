import { ChangeEvent, useEffect, useState } from 'react';
// import Headling from '../../components/Headling/Headling';
// import Search from '../../components/Search/Search';

import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import Search from '../../components/search/search';
import { MenuList } from '../../components/menu-list/MenuList';
import Headling from '../../shared/ui/heading/heading';
import { Product } from '../../shared/interfaces/product.interfaces';
import { API } from '../../shared/constants';


export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>();

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${API}/products`, {
				params: {
					name
				}
			});
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};


	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав' onChange={updateFilter} />
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && products.length > 0 && <MenuList products={products} />}
				{isLoading && <>Загружаем продукты...</>}
				{!isLoading && products.length === 0 && <>Не найдено блюд по запросу</>}
			</div>
		</>
	);
}

export default Menu;