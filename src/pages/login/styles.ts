import styled from 'styled-components';

import { theme } from '@/theme/theme';
import { colors } from '@/theme/colors';
import background from '../../assets/woman-background.png';

const backgroundSize = '50rem';
const backgroundDesktopSize = '35rem';

export const Main = styled.main`
	display: flex;
	background: ${colors.silver['000']};

	width: 100vw;
	height: 100vh;
`;

export const BackgroundWoman = styled.section`
	height: 100vh;
	width: ${backgroundSize};

	position: relative;
	background: url(${background});
	background-size: cover;

	transition-property: all;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

	@media screen and (max-width: ${theme.breakpoints.desktop}) {
		width: ${backgroundDesktopSize};
	}

	@media screen and (max-width: ${theme.breakpoints.laptop}) {
		display: none;
	}
`;

export const Overlay = styled.div`
	top: 0;
	width: 100%;
	height: 100%;

	position: absolute;
	z-index: 8;

	opacity: 0.2;
	background-color: ${colors.green[100]};
`;

export const Logo = styled.img`
	z-index: 9;
	position: absolute;

	margin: ${theme.container.margin['m-4']};
`;

export const ContainerForm = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: ${theme.container.gap['g-3']};
	background: ${colors.silver['000']};
	padding-top: ${theme.container.margin['m-4']};

	width: calc(100% - ${backgroundSize});

	@media screen and (max-width: ${theme.breakpoints.desktop}) {
		width: calc(100% - ${backgroundDesktopSize});
	}

	@media screen and (max-width: ${theme.breakpoints.laptop}) {
		width: 100%;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 22.5rem;
	min-width: 22.5rem;

	margin-top: ${theme.container.margin['m-4']};
	padding: ${theme.container.padding['p-3']} 0;
`;

export const TitleGroup = styled.div`
	height: 8.063rem;
	margin-bottom: ${theme.container.margin['m-2']};
`;

export const Title = styled.h1`
	font-size: ${theme.fontSize['fs-1']};
	color: ${colors.gray[100]};
	line-height: 3.6rem;

	span {
		color: ${colors.green[100]};
		font-size: ${theme.fontSize['fs-1']};
	}
`;

export const Subtitle = styled.h2`
	font-size: ${theme.fontSize['fs-2']};
	font-weight: 200;
`;

export const GroupButtonUser = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: ${theme.container.margin['m-3']} 0;
`;

export const GroupNewAccount = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: ${theme.container.gap['g-1']};
	margin-top: ${theme.container.margin['m-3']};

	span {
		color: ${colors.black};

		font-weight: 300;
		font-size: ${theme.fontSize['fs-2']};
	}
`;
