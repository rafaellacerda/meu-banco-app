import { Flex } from '@/components/flex/styles';
import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: baseline;
	justify-content: space-between;

	width: 100%;
	height: 6.25rem;
	padding: ${theme.container.padding['p-2']} ${theme.container.padding['p-7']};

	color: ${colors.white};
	background: ${colors.green[100]};
`;

export const User = styled(Flex)`
	margin-left: 1.5rem;
	font-size: 1rem;
`;
