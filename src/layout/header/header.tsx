import { Input } from '@/components/input/input';
import { Header as HeaderComponent } from './styles';

export function Header() {
	return (
		<HeaderComponent>
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
		</HeaderComponent>
	);
}
