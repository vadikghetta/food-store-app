import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
// import Menu from './pages/menu/Menu';
import { Cart } from './pages/cart/Cart';
// import { ErrorPage } from './pages/error/error';
import { Layout } from './layout/layout/layout';
import { Product } from './pages/product/product';
import { AuthLayout } from './layout/auth/AuthLayout';
import axios from 'axios';
import { API } from './shared/constants';
import { ErrorPage } from './pages/error-page/ErrorPage';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/RegisterPage';


const Menu = lazy(() => import('./pages/menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
			},
			// {
			// 	path: '/success',
			// 	element: <Success />
			// },
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return ({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${API}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
							}, 2000);
						})
					});
				}
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			}, {
				path: 'register',
				element: <Register />
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
