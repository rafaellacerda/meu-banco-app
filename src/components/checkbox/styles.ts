import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  100% { transform: scale(0.9); }
`;

export const Checkbox = styled.div`
	input[type='checkbox'] {
		display: none;
		visibility: hidden;
	}
`;

export const InputCheckbox = styled.input`
	&:checked + label span:first-child {
		background: ${colors.green[100]};
		border-color: ${colors.green[100]};
		animation: ${animate} 0.4s ease;
	}

	&:checked + label span:first-child svg {
		stroke-dashoffset: 0;
	}

	&:checked + label span:first-child:before {
		transform: scale(3.5);
		opacity: 0;
		transition: all 0.6s ease;
	}
`;

export const LabelCheckbox = styled.label`
	margin: auto;
	cursor: pointer;
	user-select: none;
	-webkit-user-select: none;

	font-weight: 500;
	font-size: ${theme.fontSize['fs-3']};

	color: ${colors.black};

	span {
		display: inline-block;
		vertical-align: middle;
		transform: translate3d(0, 0, 0);

		&:first-child {
			position: relative;

			width: ${theme.fontSize['fs-3']};
			height: ${theme.fontSize['fs-3']};

			border-radius: 3px;
			border: 1px solid ${colors.black};

			transform: scale(1);
			vertical-align: middle;
			transition: all 0.2s ease;

			svg {
				top: 3px;
				left: 2px;
				fill: none;
				position: absolute;

				stroke-width: 2;
				stroke-linecap: round;
				stroke-linejoin: round;
				stroke: ${colors.white};
				stroke-dasharray: ${theme.fontSize['fs-3']};
				stroke-dashoffset: ${theme.fontSize['fs-3']};

				transition-delay: 0.1s;
				transition: all 0.3s ease;
				transform: translate3d(0, 0, 0);
			}

			&:before {
				content: '';
				display: block;
				background: ${colors.green[100]};

				width: 100%;
				height: 100%;

				opacity: 1;
				border-radius: 50%;
				transform: scale(0);
			}
		}

		&:last-child {
			padding-left: 8px;
		}
	}

	&:hover {
		span:first-child {
			border-color: ${colors.black};
		}
	}
`;
