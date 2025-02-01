import { ComponentProps } from 'react';

import { BoxTitle } from './box/title';
import { BoxCard, Box as BoxComponent } from './styles';

interface BoxProps extends ComponentProps<'section'> {
	background?: string;
	containerPage?: boolean;
}

export function Box({ children, background, containerPage }: BoxProps) {
	return containerPage ? (
		<BoxComponent background={background}>{children}</BoxComponent>
	) : (
		<BoxCard>{children}</BoxCard>
	);
}

export const BoxInfo = {
	Title: BoxTitle,
};
