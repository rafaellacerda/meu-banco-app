import { Button } from '@/components/button/button';
import { Box, BoxInfo } from '@/components/box/box';

import { CardData } from './cardData/cardData';
import { Purchase } from './purchase/purchase';
import { DashboardShortcuts } from './shortcuts/shortcuts';

import { AccountData, AccountWrapper, ExtractContainerButton, Main } from './styles';

export default function Dashboard() {
	return (
		<Main>
			<DashboardShortcuts />
			<AccountWrapper>
				<AccountData $height="md">
					<CardData />
				</AccountData>
				<AccountData $height="lg">
					<Box $containerPage={false}>
						<BoxInfo.Title text="Últimas compras" />
						<Purchase />
						<ExtractContainerButton $justify="center" $align="flex-end" $height="auto">
							<Button style={{ width: '10.563rem', marginBottom: '2rem' }}>VER EXTRATO</Button>
						</ExtractContainerButton>
					</Box>
				</AccountData>
			</AccountWrapper>
		</Main>
	);
}
