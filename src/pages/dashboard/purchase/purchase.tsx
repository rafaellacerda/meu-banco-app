import { Flex } from '@/components/flex/styles';
import { Transaction } from '@/entities/transaction';

import { theme } from '@/theme/theme';
import { colors } from '@/theme/colors';

import { Font, PurchaseContainer, PurchaseDateGroup, PurchaseItem } from '../styles';
import { useEffect, useState } from 'react';
import { cardTransactions } from '@/services/cardService';
import { shortMonth } from '@/utils/formatting';

type PurchaseListProps = {
	data: Transaction[];
};

enum PurchaseType {
	DEBIT = 'Débito',
	CREDIT = 'Crédito',
}

export function Purchase() {
	const [groupedTransactions, setGroupedTransactions] = useState({} as Record<string, Transaction[]>);

	useEffect(() => {
		(async () => {
			const { data }: PurchaseListProps = await cardTransactions({ cardId: 1 });
			const groupedTransactions = data.reduce((acc, purchase) => {
				acc[purchase.date] = acc[purchase.date] || [];
				acc[purchase.date].push(purchase);
				return acc;
			}, {} as Record<string, Transaction[]>);

			setGroupedTransactions(groupedTransactions);
		})();
	}, []);

	return (
		<Flex $direction="column" $height="auto">
			{Object.entries(groupedTransactions).map(([date, items]) => (
				<PurchaseDateGroup $direction="column" $height="auto" key={date}>
					<Font $color={colors.green[100]} $size={theme.fontSize['fs-5']} $weight="700">
						{shortMonth(date)}
					</Font>
					<PurchaseContainer>
						{items.map(({ id, description, type, value }) => (
							<PurchaseItem key={id}>
								<Flex $align="center" $justify="space-between" $height="auto">
									<Flex $direction="column" $width="fit-content">
										<Font $size={theme.fontSize['fs-5']} $weight="400" $color={colors.gray[100]}>
											{description}
										</Font>
										<Font $size={theme.fontSize['fs-6']} $weight="600" $color={colors.silver[300]}>
											Compra no {PurchaseType[type].toLowerCase()}
										</Font>
									</Flex>
									<Font $size={theme.fontSize['fs-5']} $color={colors.green[100]}>
										R$ {value.toFixed(2)}
									</Font>
								</Flex>
							</PurchaseItem>
						))}
					</PurchaseContainer>
				</PurchaseDateGroup>
			))}
		</Flex>
	);
}
