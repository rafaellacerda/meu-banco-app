import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled from 'styled-components';

type TBoxProps = {
	background?: string;
};

export const Box = styled.section<TBoxProps>`
	display: block;
	width: 100%;
	height: 100%;

	background: ${({ background }) => (!!background ? background : colors.white)};
	border-radius: ${theme.container.borderRadius['br-2']};

	padding: ${theme.container.gap['g-3']};
`;
