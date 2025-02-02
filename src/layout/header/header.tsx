import { Icon } from '@/components/icon/icon';
import { Flex } from '@/components/flex/styles';
import { Input } from '@/components/input/input';

import { useAtom } from 'jotai';
import { authUser } from '@/stores/global/auth';

import { Header as HeaderComponent, User as UserComponent } from './styles';

export function Header() {
	const [user] = useAtom(authUser);

	return (
		<HeaderComponent>
			<Flex $align="center" $width="280px">
				<Input placeholder="Buscar" id="username" type="search" $variant="silver" $height="md" required />
			</Flex>

			<Flex $justify="flex-end" $align="center" $height="100%">
				<Icon type="bell" />
				<UserComponent $align="center" $height="100%" $width="fit-content">
					<Icon type="user" />
					<span style={{ marginLeft: 10 }}>
						Bem-vindo, <strong style={{ fontWeight: 700 }}>{user.name}</strong>
					</span>
				</UserComponent>
			</Flex>
		</HeaderComponent>
	);
}
