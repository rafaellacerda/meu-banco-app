import { Toaster } from 'sonner';
import { BrowserRouter } from 'react-router-dom';

import { Sidebar } from '@/layout/sidebar/sidebar';
import { Header } from '@/layout/header/header';

import AppRoutes from './app.routes';
import GlobalStyle from '../theme/globalStyles';

export default function Router() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Toaster richColors />
			<main className="main-app">
				<Sidebar />
				<section className="container-app">
					<Header />
					<AppRoutes />
				</section>
			</main>
		</BrowserRouter>
	);
}
