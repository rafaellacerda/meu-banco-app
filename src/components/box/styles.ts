import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled from 'styled-components';

type TBoxProps = {
	$background?: string;
};

export const Box = styled.section<TBoxProps>`
	display: block;
	width: 100%;
	height: 100%;

	background: ${({ $background }) => (!!$background ? $background : colors.white)};
	border-radius: ${theme.container.borderRadius['br-2']};

	padding: ${theme.container.padding['p-3']};
`;

export const BoxCard = styled.div`
	display: block;

	width: 100%;
	height: 100%;
	padding: ${theme.container.padding['p-4']};

	background: ${colors.white};
	border-radius: ${theme.container.borderRadius['br-2']};
`;

export const Title = styled.h1`
	display: flex;
	align-items: center;

	color: ${colors.gray[100]};

	font-weight: 600;
	font-size: ${theme.fontSize['fs-3']};
`;
