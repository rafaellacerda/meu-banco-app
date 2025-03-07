import { Main, Wrapper } from './styles';

import { Box } from '@/components/box/box';
import { PlaceholderPage } from '@/components/placeholderPage/placeholderPage';

export default function Wallet() {
	return (
		<Main>
			<Box>
				<Wrapper>
					<PlaceholderPage text="Placeholder de navegação" />
				</Wrapper>
			</Box>
		</Main>
	);
}
