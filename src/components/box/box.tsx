import { ComponentProps } from 'react';
import { Box as BoxComponent } from './styles';

interface BoxProps extends ComponentProps<'section'> {
	background?: string;
}

export function Box({ children, background }: BoxProps) {
	return <BoxComponent background={background}>{children}</BoxComponent>;
}
