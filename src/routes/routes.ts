export type TRoutes = {
	href: string;
	icon: string;
	name: string;
	claims: string[] | never[];
};

export const ROUTES = [
	{
		href: '/dashboard',
		icon: 'home',
		name: 'Painel',
		claims: [],
	},
	{
		href: '/wallet',
		icon: 'wallet',
		name: 'Carteira',
		claims: [],
	},
	{
		href: '/transfer',
		icon: 'transfer',
		name: 'Transferências',
		claims: [],
	},
	{
		href: '/services',
		icon: 'services',
		name: 'Serviços',
		claims: [],
	},
	{
		href: '/settings',
		icon: 'settings',
		name: 'Configurações',
		claims: [],
	},
];
