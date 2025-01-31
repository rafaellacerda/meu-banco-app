import './utils/dynamicImportErrorListener.ts';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Router from './routes/index.routes.tsx';
import ErrorBoundary from './components/errorBoundary/errorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ErrorBoundary>
			<Router />
		</ErrorBoundary>
	</StrictMode>,
);
