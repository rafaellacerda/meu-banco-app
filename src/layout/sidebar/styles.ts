import styled, { css } from 'styled-components';

import { theme } from '@/theme/theme';
import { colors } from '@/theme/colors';

type TItemProps = {
	active?: boolean;
};

export const Nav = styled.nav`
	height: 100vh;
	width: 17.5rem;
	background: ${colors.white};

	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	display: flex;
	justify-content: center;

	padding: ${theme.container.padding['p-3']};
`;

export const ListNav = styled.ul`
	display: flex;
	align-items: flex-end;
	flex-direction: column;

	width: 100%;

	margin-top: 2.2rem;
`;

export const Item = styled.li<TItemProps>`
	list-style: none;
	width: 80%;
	height: 3.375rem;

	display: flex;
	align-items: center;

	gap: ${theme.container.gap['g-1']};

	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	cursor: pointer;

	padding: ${theme.container.padding['p-1']};
	margin: 2px 0;

	background: ${({ active }) => (active ? colors.green[100] : '')};

	a {
		text-decoration: none;
		color: ${colors.gray[100]};

		display: flex;
		align-items: center;

		width: 100%;
		height: 100%;

		gap: ${theme.container.gap['g-1']};
		padding-left: ${theme.container.padding['p-1']};

		${({ active }) =>
			active &&
			css`
				color: ${colors.white};
				background: ${colors.green[100]};

				a {
					color: ${colors.white};
				}

				svg,
				path {
					fill: #fff;
				}
			`};
	}

	&:hover {
		color: ${colors.white};
		background: ${colors.green[100]};

		a {
			color: ${colors.white};
		}

		svg,
		path {
			fill: #fff;
		}
	}
`;

export const Footer = styled.footer`
	display: flex;
	align-items: flex-end;
	height: 100%;
	padding: ${theme.container.padding['p-3']};
`;

export const WrapperBox = styled.div`
	width: 100%;
	height: 12.375rem;
`;

export const TitleFooter = styled.h1`
	display: flex;
	flex-direction: column;

	color: ${colors.white};

	span {
		font-weight: 600;
		font-size: ${theme.fontSize['fs-2']};
	}
`;

export const SubtitleFooter = styled.span`
	width: 9rem;
	display: block;
	color: ${colors.white};

	font-weight: 300;
	font-size: ${theme.fontSize['fs-4']};

	padding: ${theme.container.margin['m-2']} 0;
`;
