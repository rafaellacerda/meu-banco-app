import { colors } from '@/theme/colors';

import { Icon } from '@/components/icon/icon';
import { Shortcut, ShortcutItem, Shortcuts } from '@/components/shortcuts/shortcuts';

import { ShortcutButton } from '../styles';

export function DashboardShortcuts() {
	return (
		<Shortcuts>
			<Shortcut>
				<ShortcutItem.Highlight>+23%</ShortcutItem.Highlight>
				<ShortcutItem.Label>Gasto esse mês</ShortcutItem.Label>
				<ShortcutItem.Title>R$ 3.547,67</ShortcutItem.Title>
			</Shortcut>
			<Shortcut>
				<ShortcutItem.Highlight>+6%</ShortcutItem.Highlight>
				<ShortcutItem.Label>Recebido esse mês</ShortcutItem.Label>
				<ShortcutItem.Title>R$ 7.648,48</ShortcutItem.Title>
			</Shortcut>
			<Shortcut>
				<ShortcutItem.Tag>+R$ 242,13 (+2.54%)</ShortcutItem.Tag>
				<ShortcutItem.Label>Investimentos</ShortcutItem.Label>
				<ShortcutItem.Title>R$ 9.532,62</ShortcutItem.Title>
			</Shortcut>
			<Shortcut>
				<ShortcutItem.Label>Cartões</ShortcutItem.Label>
				<ShortcutItem.Title>R$ 9.532,62</ShortcutItem.Title>
			</Shortcut>
			<Shortcut background={colors.silver[100]}>
				<ShortcutButton>
					<Icon type="plus" />
					<span>
						configurar <span>atalhos</span>
					</span>
				</ShortcutButton>
			</Shortcut>
		</Shortcuts>
	);
}
