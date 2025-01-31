import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from '@/components/loader/loader';
const NotFound = lazy(() => import('../pages/notFound/notFound'));
const Login = lazy(() => import('../pages/login/login'));

export default function AuthRoutes() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/404" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
