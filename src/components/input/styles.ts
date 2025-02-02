import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled, { css } from 'styled-components';

type TInputProps = {
	type: React.HTMLInputTypeAttribute | undefined;
	$variant?: 'silver';
};

type TBoxInputProps = {
	$variant?: 'silver';
	$height?: 'md' | 'lg';
};

export const Group = styled.div`
	display: flex;
	flex-direction: column;

	gap: ${theme.container.gap['g-1']};
	margin-bottom: ${theme.container.margin['m-2']};
`;

export const WrapperInput = styled.div<TBoxInputProps>`
	display: block;
	position: relative;

	width: 100%;

	padding: 0 ${theme.container.padding['p-2']};

	background-clip: padding-box;
	background-color: ${({ $variant }) => ($variant === 'silver' ? 'transparent' : colors.white)};
	border: 2px solid ${({ $variant }) => ($variant === 'silver' ? colors.white : colors.silver[200])};

	border-radius: ${theme.container.borderRadius['br-1']};
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	${({ $height }) =>
		$height === 'lg' &&
		css`
			height: 2.875rem;
		`}

	${({ $height }) =>
		$height === 'md' &&
		css`
			height: 2.25rem;
		`}

	span {
		position: absolute;
		top: 10px;
		left: 6px;

		${({ $height }) =>
			$height === 'md' &&
			css`
				top: 6px;
			`}
	}
`;

export const Input = styled.input<TInputProps>`
	border: none;
	width: 100%;
	height: 100%;

	color: ${({ $variant }) => ($variant === 'silver' ? colors.white : colors.black)};
	background-color: ${({ $variant }) => ($variant === 'silver' ? 'transparent' : colors.white)};
	padding-left: ${({ type }) => (type === 'search' ? theme.container.padding['p-4'] : 0)};

	${({ $variant }) =>
		$variant === 'silver' &&
		css`
			&::-webkit-input-placeholder{
			color:${colors.white};
		`}
`;

export const Label = styled.label`
	font-weight: 400;
	color: ${colors.gray[100]};
	font-size: ${theme.fontSize['fs-3']};
`;

export const ErrorMessage = styled.small`
	display: flex;
	margin-top: -8px;
	margin-bottom: 15px;

	color: red;
`;
