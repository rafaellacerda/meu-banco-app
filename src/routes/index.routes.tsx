import { useAtom } from 'jotai';
import { Toaster } from 'sonner';
import { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Loader from '@/components/loader/loader';
import { Header } from '@/layout/header/header';
import { Sidebar } from '@/layout/sidebar/sidebar';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import GlobalStyle from '../theme/globalStyles';

import { userLoggedAtom, loadUserAuth } from '../stores/global/auth';

export default function Router() {
	const [logged] = useAtom(userLoggedAtom);

	useEffect(() => {
		if (!logged) loadUserAuth();
	}, [, logged]);

	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<GlobalStyle />
				<Toaster richColors position="top-right" />

				{logged && (
					<main className="main-app">
						<Sidebar />
						<section className="container-app">
							<Header />
							<AppRoutes />
						</section>
					</main>
				)}

				{!logged && <AuthRoutes />}
			</BrowserRouter>
		</Suspense>
	);
}
