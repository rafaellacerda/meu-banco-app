import { theme } from '@/theme/theme';
import { colors } from '@/theme/colors';

import styled from 'styled-components';
import { Flex } from '@/components/flex/styles';

type TAccountDataProps = {
	height: 'md' | 'lg';
};

type FontProps = {
	size?: string;
	color?: string;
	weight?: '300' | '400' | '600' | '700';
};

export const Main = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: 100vh;

	background: ${colors.green[100]};
	padding: ${theme.container.padding['p-5']} ${theme.container.padding['p-6']} ${theme.container.padding['p-5']}
		${theme.container.padding['p-7']};
`;

export const Wrapper = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	gap: 5rem;
	margin-top: ${theme.container.margin['m-2']};

	@media screen and (max-width: 1550px) {
		gap: ${theme.container.gap['g-5']};
	}
`;

export const ShortcutButton = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	width: 100%;
	height: 100%;
	gap: 0.75rem;

	cursor: pointer;

	span {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`;

export const AccountWrapper = styled.section`
	display: flex;
	justify-content: space-between;

	width: 100%;
	gap: 1.5rem;
	margin-top: ${theme.container.margin['m-1']};
`;

export const AccountData = styled.div<TAccountDataProps>`
	display: flex;

	width: 50%;
	min-width: 34rem;
	height: fit-content;
	// height: ${({ height }) => (height === 'md' ? '18.781rem' : '36.875rem')};

	margin-top: 1rem;

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Font = styled.span<FontProps>`
	font-size: ${({ size }) => size || '1rem'};
	font-weight: ${({ weight }) => weight || 'normal'};
	color: ${({ color }) => color || colors.gray[100]};
`;

export const LastPurchase = styled(Flex)`
	margin-top: ${theme.container.margin['m-3']};

	span {
		display: flex;
		gap: ${theme.container.padding['p-6']};

		@media screen and (max-width: 1550px) {
			justify-content: space-between;
		}
	}
`;

export const PurchaseDateGroup = styled(Flex)`
	margin-top: ${theme.container.margin['m-3']};
`;

export const PurchaseContainer = styled.ul`
	display: flex;
	flex-direction: column;
	margin-top: ${theme.container.margin['m-1']};
`;

export const PurchaseItem = styled.li`
	display: flex;
	align-items: flex-end;

	height: 2.438rem;
	border-bottom: 1px solid ${colors.silver[200]};

	padding-bottom: 3px;
	margin-top: ${theme.container.margin['m-1']};
`;

export const ExtractContainerButton = styled(Flex)`
	margin-top: ${theme.container.margin['m-3']};
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: 9.75rem;
	max-width: 16rem;

	padding: 1rem;

	color: ${colors.white};
	border-radius: 0.544rem;
	background: linear-gradient(248.54deg, #1bc681 1.38%, #0d603f 89.61%);

	ul {
		display: flex;
		gap: 0.4rem;
		margin: 0.8rem 0;

		li {
			font-family: 'JetBrains Mono';
		}
	}

	span {
		color: ${colors.white};
		font-family: 'JetBrains Mono';
	}
`;
