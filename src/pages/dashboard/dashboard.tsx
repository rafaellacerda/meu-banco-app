import { Flex } from '@/components/flex/styles';
import { Button } from '@/components/button/button';
import { Box, BoxInfo } from '@/components/box/box';

import { DashboardShortcuts } from './shortcuts/shortcuts';

import { AccountData, AccountWrapper, ExtractContainerButton, Main } from './styles';

import { CardData } from './cardData/cardData';
import { Purchase } from './purchase/purchase';
import { Transaction } from '@/entities/transaction';

export default function Dashboard() {
	const purchase: Transaction[] = [
		{
			id: 1,
			date: '01/01/2023',
			description: 'Teste',
			value: 10.0,
			type: 'DEBIT',
			cardId: 1,
		},
		{
			id: 2,
			date: '01/01/2023',
			description: 'Teste 2',
			value: 23.0,
			type: 'CREDIT',
			cardId: 1,
		},
		{
			id: 3,
			date: '01/01/2023',
			description: 'Teste 3',
			value: 25.0,
			type: 'CREDIT',
			cardId: 1,
		},
		{
			id: 4,
			date: '02/01/2023',
			description: 'Teste 2',
			value: 23.0,
			type: 'DEBIT',
			cardId: 1,
		},
		{
			id: 5,
			date: '03/01/2023',
			description: 'Teste 3',
			value: 25.0,
			type: 'DEBIT',
			cardId: 1,
		},
	];

	return (
		<Main>
			<DashboardShortcuts />
			<AccountWrapper>
				<AccountData height="md">
					<CardData />
				</AccountData>
				<AccountData height="lg">
					<Box containerPage={false}>
						<BoxInfo.Title text="Últimas compras" />
						<Purchase purchaseList={purchase} />
						<ExtractContainerButton justify="center" align="flex-end" height="auto">
							<Button style={{ width: '10.563rem', marginBottom: '2rem' }}>VER EXTRATO</Button>
						</ExtractContainerButton>
					</Box>
				</AccountData>
			</AccountWrapper>
		</Main>
	);
}
