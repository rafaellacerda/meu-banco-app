import { theme } from '@/theme/theme';
import { colors } from '@/theme/colors';

import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;

	background: ${colors.green[100]};
	padding: ${theme.container.padding['p-5']} ${theme.container.padding['p-6']} ${theme.container.padding['p-5']}
		${theme.container.padding['p-7']};
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;
