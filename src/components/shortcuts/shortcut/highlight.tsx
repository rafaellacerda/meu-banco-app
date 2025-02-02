import { ComponentProps } from 'react';
import { Highlight } from '../styles';

interface ShortcutsProps extends ComponentProps<'span'> {}

export function ShortcutHightlight({ children }: ShortcutsProps) {
	return <Highlight>{children}</Highlight>;
}
