import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled from 'styled-components';

export const Group = styled.div`
	display: flex;
	flex-direction: column;

	gap: ${theme.container.gap['g-1']};
	margin-bottom: ${theme.container.margin['m-2']};
`;

export const Input = styled.input`
	display: block;

	width: 100%;
	height: 2.875rem;

	padding: 0 ${theme.container.padding['p-2']};

	background-clip: padding-box;
	background-color: ${colors.white};

	border: 2px solid ${colors.silver[200]};
	border-radius: ${theme.container.borderRadius['br-1']};
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Label = styled.label`
	font-weight: 400;
	color: ${colors.gray[100]};
	font-size: ${theme.fontSize['fs-3']};
`;
