import './utils/dynamicImportErrorListener.ts';

import { Provider } from 'jotai';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Router from './routes/index.routes.tsx';
import { authStore } from './stores/global/auth.ts';
import ErrorBoundary from './components/errorBoundary/errorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={authStore}>
			<ErrorBoundary>
				<Router />
			</ErrorBoundary>
		</Provider>
	</StrictMode>,
);
