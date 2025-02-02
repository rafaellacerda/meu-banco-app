import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled, { css } from 'styled-components';

type TButtonLinkProps = {
	$variant?: 'primary' | 'link';
	$size?: 'fs-1' | 'fs-2' | 'fs-3' | 'fs-4' | 'fs-5' | 'fs-6';
};

export const ButtonLink = styled.button<TButtonLinkProps>`
	display: inline-flex;
	align-items: center;

	color: ${colors.green[100]};
	padding: ${theme.container.padding['p-1']} 0;

	font-weight: 500;
	line-height: 1.25rem;
	font-size: ${({ $size }) => theme.fontSize[$size ?? 'fs-5']};

	white-space: nowrap;
	background: transparent;
	text-underline-offset: 4px;

	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;

	${({ $variant }) =>
		$variant === 'link' &&
		css`
			color: ${colors.blue[100]};
		`}

	&:hover {
		text-decoration: underline;
	}
`;
