import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 5.25rem;
	padding: 0 ${theme.container.padding['p-7']};

	color: ${colors.white};
	background: ${colors.green[100]};
`;
