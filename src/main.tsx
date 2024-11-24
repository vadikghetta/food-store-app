import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Menu } from './pages/menu/Menu';
import { Cart } from './pages/cart/Cart';
import { ErrorPage } from './pages/error/error';
import { Layout } from './layout/layout/layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Menu />
			},
			{
				path: '/cart',
				element: <Cart />
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]);


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
