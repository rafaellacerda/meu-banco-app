import Loader from '@/components/loader/loader';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const NotFound = lazy(() => import('../pages/notFound/notFound'));
const Dashboard = lazy(() => import('../pages/dashboard/dashboard'));
const Services = lazy(() => import('../pages/services/services'));
const Settings = lazy(() => import('../pages/settings/settings'));
const Transfer = lazy(() => import('../pages/transfer/transfer'));
const Wallet = lazy(() => import('../pages/wallet/wallet'));

export default function AppRoutes() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/services" element={<Services />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/transfer" element={<Transfer />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/404" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
