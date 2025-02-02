import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled, { css } from 'styled-components';

type TButtonProps = {
	$variant?: 'danger' | 'silver';
};

export const Button = styled.button<TButtonProps>`
	display: flex;
	align-items: center;
	justify-content: space-around;

	padding: 0 ${theme.container.padding['p-2']};
	border-radius: ${theme.container.borderRadius['br-1']};

	width: 100%;
	height: 3rem;

	color: ${colors.white};
	background: ${colors.green[100]};

	font-weight: 500;
	font-size: ${theme.fontSize['fs-3']};

	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 300ms;

	${({ $variant }) =>
		$variant === 'silver' &&
		css`
			background: transparent;
			border: 1px solid #fff;
			height: 2.375rem;
		`}

	&:hover,
	&:disabled {
		background: ${colors.green[200]};
	}
`;

export const Spinner = styled.div`
	svg {
		width: 30px;
	}
`;
