import chip from '../../../assets/chip.png';
import meuBancoLogo from '../../../assets/logo-min.png';

import { useEffect, useState } from 'react';

import { Card } from '@/entities/card';
import { Transaction } from '@/entities/transaction';

import { theme } from '@/theme/theme';

import { Icon } from '@/components/icon/icon';
import { Flex } from '@/components/flex/styles';
import { Box, BoxInfo } from '@/components/box/box';
import { Button } from '@/components/button/button';
import { Progress } from '@/components/progress/progress';

import { formatCurrency, formatThousands } from '@/utils/formatting';
import { getCardData, getLastTransaction } from '@/services/cardService';

import { Card as CardComponent, Font, LastPurchase, Wrapper, Image } from '../styles';

function FormatCardNumber({ cardNumber }: any) {
	if (!cardNumber) return <></>;

	const arrayCardNumber = cardNumber.match(/.{1,4}/g);
	return (
		<ul>
			{arrayCardNumber.map((item: string, index: number) => (
				<li key={`${index}${item}`}>{item}</li>
			))}
		</ul>
	);
}

export function CardData() {
	const [cardData, setCardData] = useState<Card>({} as Card);
	const [lastTransaction, setLastTransaction] = useState<Transaction>({} as Transaction);

	useEffect(() => {
		(async () => {
			const { data } = await getCardData({ cardId: 1 });
			setCardData(data);

			const { data: dataTransaction } = await getLastTransaction({ cardId: 1 });
			setLastTransaction(dataTransaction);
		})();
	}, []);

	const calcPercentage = (limit: number, spent: number) => (spent / limit) * 100;

	return (
		<Box $containerPage={false}>
			<BoxInfo.Title text="Cartões" />
			<Wrapper>
				<Flex $width="50%">
					<CardComponent>
						<Image src={meuBancoLogo} $width="73px" $height="17px" />
						<Image src={chip} $width="60px" $height="24px" $margin="0.6rem 0 0 0" />
						<FormatCardNumber cardNumber={cardData?.number?.toString() ?? ''} />

						<Flex $align="center" $justify="space-between">
							<Font $size="0.725rem">{cardData?.name}</Font>
							<Flex $direction="column" $width="fit-content">
								<Font $size="0.575rem">validade</Font>
								<Font $size="0.665rem">{cardData?.validate}</Font>
							</Flex>
							<Icon type="mastercard" />
						</Flex>
					</CardComponent>
				</Flex>
				<Flex $direction="column" $width="50%">
					<Flex $direction="column">
						<Font $weight="300">Limite disponível</Font>
						<Font $size={theme.fontSize['fs-2']} $weight="600">
							{formatCurrency(cardData?.limit)}
						</Font>
					</Flex>
					<LastPurchase $direction="column">
						<Font $weight="300">Última compra</Font>
						<span>
							<Font $weight="400">{lastTransaction?.description}</Font>
							<Font $weight="400">{formatCurrency(lastTransaction?.value)}</Font>
						</span>
					</LastPurchase>
				</Flex>
			</Wrapper>
			<Wrapper>
				<Flex $direction="column" $width="50%" $align="flex-start">
					<Progress percent={calcPercentage(cardData?.limit, cardData?.monthLimit)} $maxWidth="16rem" />
					<Flex $width="100%" $justify="space-between" $maxWidth="16rem" style={{ marginTop: 6 }}>
						<Font $size={theme.fontSize['fs-5']} $weight="400">
							Limite mensal
						</Font>
						<Font $size={theme.fontSize['fs-5']} $weight="400">
							{formatCurrency(cardData?.monthLimit)}/{formatThousands(cardData?.limit)}
						</Font>
					</Flex>
				</Flex>
				<Flex $direction="column" $width="50%">
					<Button>MAIS DETALHES</Button>
				</Flex>
			</Wrapper>
		</Box>
	);
}
