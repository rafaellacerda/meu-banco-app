import { theme } from '@/theme/theme';
import { colors } from '@/theme/colors';

import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	width: 100vw;
	height: 100vh;

	background: ${colors.green[100]};
`;

export const Title = styled.h1`
	font-size: ${theme.fontSize['fs-1']};
	color: ${colors.white};
	line-height: 3.6rem;
`;
