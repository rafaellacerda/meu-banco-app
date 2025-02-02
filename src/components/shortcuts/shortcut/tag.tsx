import { ComponentProps } from 'react';

import { Tag } from '../styles';

interface ShortcutsProps extends ComponentProps<'span'> {}

export function ShortcutTag({ children }: ShortcutsProps) {
	return <Tag>{children}</Tag>;
}
