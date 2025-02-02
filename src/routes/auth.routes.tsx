import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Loader from '@/components/loader/loader';
import { logout, userLoggedAtom } from '@/stores/global/auth';
import { UNAUTHENTICATEDROUTES } from './routes';

const Login = lazy(() => import('../pages/login/login'));
const NotFound = lazy(() => import('../pages/notFound/notFound'));

export default function AuthRoutes() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const auth = localStorage.getItem('@meubanco:auth');
		if (!auth && !UNAUTHENTICATEDROUTES.find(item => item === location.pathname)) {
			logout();
			navigate('/');
		}
	}, [, userLoggedAtom]);

	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/404" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
