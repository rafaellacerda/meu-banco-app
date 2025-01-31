import { lazy } from 'react';
import { TMainIconProps } from './types.js';

const Bell = lazy(() => import('./icons/bell.js'));
const Home = lazy(() => import('./icons/home.js'));
const Plus = lazy(() => import('./icons/plus.js'));
const Search = lazy(() => import('./icons/search.js'));
const Services = lazy(() => import('./icons/services.js'));
const Settings = lazy(() => import('./icons/settings.js'));
const Transfer = lazy(() => import('./icons/transfer.js'));
const User = lazy(() => import('./icons/user.js'));
const Wallet = lazy(() => import('./icons/wallet.js'));

export default function Icon({ width, height, color, type }: TMainIconProps) {
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
	};

	return component[type];
}
