import { colors } from '@/theme/colors';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% { transform: rotate(1turn); }
`;

export const LoaderMain = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	position: absolute;
	background: rgba(0, 0, 0, 0.6);
`;

export const LoaderIcon = styled.div`
	--size: 22px;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	color: ${colors.green[100]};
	box-shadow: calc(1 * var(--size)) calc(0 * var(--size)) 0 0, calc(0.707 * var(--size)) calc(0.707 * var(--size)) 0 1px,
		calc(0 * var(--size)) calc(1 * var(--size)) 0 2px, calc(-0.707 * var(--size)) calc(0.707 * var(--size)) 0 3px,
		calc(-1 * var(--size)) calc(0 * var(--size)) 0 4px, calc(-0.707 * var(--size)) calc(-0.707 * var(--size)) 0 5px,
		calc(0 * var(--size)) calc(-1 * var(--size)) 0 6px;
	animation: ${rotate} 1s infinite steps(8);

	z-index: 10;
`;
