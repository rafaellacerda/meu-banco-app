import { ComponentProps } from 'react';

import { ShortcutTag } from './shortcut/tag';
import { Shortcuts as ShortcutsComponent, Shortcut as ShortcutComponent } from './styles';
import { ShortcutHightlight } from './shortcut/highlight';
import { ShortcutLabel } from './shortcut/label';
import { ShortcutTitle } from './shortcut/title';

interface ShortcutsProps extends ComponentProps<'section'> {}
interface ShortcutProps extends ComponentProps<'section'> {
	background?: string;
}

export function Shortcuts({ children }: ShortcutsProps) {
	return <ShortcutsComponent>{children}</ShortcutsComponent>;
}

export function Shortcut({ children, background }: ShortcutProps) {
	return <ShortcutComponent background={background}>{children}</ShortcutComponent>;
}

export const ShortcutItem = {
	Tag: ShortcutTag,
	Label: ShortcutLabel,
	Title: ShortcutTitle,
	Highlight: ShortcutHightlight,
};
