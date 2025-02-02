import { lazy } from 'react';
import { TMainIconProps } from './types';

const Bell = lazy(() => import('./icons/bell'));
const Home = lazy(() => import('./icons/home'));
const Plus = lazy(() => import('./icons/plus'));
const Search = lazy(() => import('./icons/search'));
const Services = lazy(() => import('./icons/services'));
const Settings = lazy(() => import('./icons/settings'));
const Transfer = lazy(() => import('./icons/transfer'));
const User = lazy(() => import('./icons/user'));
const Wallet = lazy(() => import('./icons/wallet'));
const Spinner = lazy(() => import('./icons/spinner'));
const Mastercard = lazy(() => import('./icons/mastercard'));

export function Icon({ width, height, color, type }: TMainIconProps) {
	const props = { width, height, color };
	const component = {
		bell: <Bell {...props} />,
		home: <Home {...props} />,
		plus: <Plus {...props} />,
		search: <Search {...props} />,
		services: <Services {...props} />,
		settings: <Settings {...props} />,
		transfer: <Transfer {...props} />,
		user: <User {...props} />,
		wallet: <Wallet {...props} />,
		spinner: <Spinner {...props} />,
		mastercard: <Mastercard />,
	};

	return component[type];
}
