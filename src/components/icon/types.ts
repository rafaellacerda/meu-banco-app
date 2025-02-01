export type TIconProps = {
	width?: number;
	height?: number;
	color?: string;
};

export type TMainIconProps = {
	type:
		| 'bell'
		| 'home'
		| 'plus'
		| 'search'
		| 'services'
		| 'settings'
		| 'transfer'
		| 'user'
		| 'wallet'
		| 'spinner'
		| 'mastercard';
} & TIconProps;
