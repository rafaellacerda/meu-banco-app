import { ComponentProps } from 'react';
import { Title } from '../styles';

interface ShortcutsProps extends ComponentProps<'span'> {}

export function ShortcutTitle({ children }: ShortcutsProps) {
	return <Title>{children}</Title>;
}
