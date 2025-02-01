import styled, { css } from 'styled-components';

import { theme } from '@/theme/theme';
import { colors } from '@/theme/colors';

type TProgressProps = { width: number; maxWidth?: string };

export const Progress = styled.div<TProgressProps>`
	display: flex;
	position: relative;

	width: 100%;
	height: 0.5rem;

	background: ${colors.silver[200]};
	border-radius: ${theme.container.borderRadius['br-1']};

	${({ maxWidth }) =>
		!!maxWidth &&
		css`
			max-width: ${maxWidth};
		`}

	&:before {
		content: '';
		position: absolute;

		background: ${colors.green[100]};
		border-radius: ${theme.container.borderRadius['br-1']};

		top: 0;
		left: 0;
		height: 100%;
		width: ${({ width }) => width}%;
	}
`;
