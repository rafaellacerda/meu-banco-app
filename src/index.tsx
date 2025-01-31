import './utils/dynamicImportErrorListener.ts';

import { Toaster } from 'sonner';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './theme/globalStyles';
import AppRoutes from './routes/app.routes.tsx';
import ErrorBoundary from './components/errorBoundary/errorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ErrorBoundary>
			<BrowserRouter>
				<GlobalStyle />
				<Toaster richColors />

				<AppRoutes />
			</BrowserRouter>
		</ErrorBoundary>
	</StrictMode>,
);
