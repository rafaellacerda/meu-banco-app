import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/login/login'));
const NotFound = lazy(() => import('../pages/notFound/notFound'));

export default function AppRoutes() {
	return (
		<Suspense fallback={<>Carregando...</>}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/404" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
