import meuBancoLogo from '../../../assets/logo-min.png';
import chip from '../../../assets/chip.png';

import { theme } from '@/theme/theme';

import { Flex } from '@/components/flex/styles';
import { Box, BoxInfo } from '@/components/box/box';
import { Button } from '@/components/button/button';
import { Progress } from '@/components/progress/progress';

import { Card, Font, LastPurchase, Wrapper } from '../styles';
import { Icon } from '@/components/icon/icon';

export function CardData() {
	return (
		<Box containerPage={false}>
			<BoxInfo.Title text="Cartões" />
			<Wrapper>
				<Flex width="50%">
					<Card>
						<img src={meuBancoLogo} style={{ width: 73, height: 17 }} />
						<img src={chip} style={{ width: 60, height: 24, marginTop: '0.6rem' }} />
						<ul>
							<li>1234</li>
							<li>1234</li>
							<li>1234</li>
							<li>1234</li>
						</ul>
						<Flex align="center" justify="space-between">
							<Font size="0.725rem">Tide Cardoso</Font>
							<Flex flexDirection="column" width="fit-content">
								<Font size="0.575rem">validade</Font>
								<Font size="0.665rem">12/32</Font>
							</Flex>
							<Icon type="mastercard" />
						</Flex>
					</Card>
				</Flex>
				<Flex flexDirection="column" width="50%">
					<Flex flexDirection="column">
						<Font weight="300">Limite disponível</Font>
						<Font size={theme.fontSize['fs-2']} weight="600">
							R$ 3.000,00
						</Font>
					</Flex>
					<LastPurchase flexDirection="column">
						<Font weight="300">Última compra</Font>
						<span>
							<Font weight="400">Bazar</Font>
							<Font weight="400">R$300</Font>
						</span>
					</LastPurchase>
				</Flex>
			</Wrapper>
			<Wrapper>
				<Flex flexDirection="column" width="50%" align="flex-start">
					<Progress percent={20} maxWidth="16rem" />
					<Flex width="100%" justify="space-between" maxWidth="16rem" style={{ marginTop: 6 }}>
						<Font size={theme.fontSize['fs-5']} weight="400">
							Limite mensal
						</Font>
						<Font size={theme.fontSize['fs-5']} weight="400">
							R$ 300/3.000
						</Font>
					</Flex>
				</Flex>
				<Flex flexDirection="column" width="50%">
					<Button>MAIS DETALHES</Button>
				</Flex>
			</Wrapper>
		</Box>
	);
}
