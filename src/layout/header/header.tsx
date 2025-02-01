import { Input } from '@/components/input/input';
import { Header as HeaderComponent, User } from './styles';
import { Icon } from '@/components/icon/icon';
import { Flex } from '@/components/flex/styles';

export function Header() {
	return (
		<HeaderComponent>
			<Flex align="center" width="280px">
				<Input
					placeholder="Buscar"
					id="username"
					type="search"
					variant="silver"
					height="md"
					// value={username}
					// onChange={e => setUsername(e.target.value)}
					required
				/>
			</Flex>

			<Flex justify="flex-end" align="center" height="100%">
				<Icon type="bell" />
				<User align="center" height="100%" width="fit-content">
					<Icon type="user" />
					<span style={{ marginLeft: 10 }}>
						Bem-vindo, <strong style={{ fontWeight: 700 }}>Rafael Lacerda</strong>
					</span>
				</User>
			</Flex>
		</HeaderComponent>
	);
}
