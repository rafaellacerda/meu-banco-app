import { Toaster } from 'sonner';
import { BrowserRouter } from 'react-router-dom';

import { Sidebar } from '@/layout/sidebar/sidebar';
import { Header } from '@/layout/header/header';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import GlobalStyle from '../theme/globalStyles';

import { useAtom } from 'jotai';
import { userLoggedAtom } from '../stores/global/auth';
import { Suspense } from 'react';
import Loader from '@/components/loader/loader';

export default function Router() {
	const [user] = useAtom(userLoggedAtom);

	console.log(user);

	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<GlobalStyle />
				<Toaster richColors />

				{user && (
					<main className="main-app">
						<Sidebar />
						<section className="container-app">
							<Header />
							<AppRoutes />
						</section>
					</main>
				)}

				{!user && <AuthRoutes />}
			</BrowserRouter>
		</Suspense>
	);
}
