import { ComponentProps } from 'react';
import { Label } from '../styles';

interface ShortcutsProps extends ComponentProps<'label'> {}

export function ShortcutLabel({ children }: ShortcutsProps) {
	return <Label>{children}</Label>;
}
