import { colors } from '@/theme/colors';
import { theme } from '@/theme/theme';

import styled from 'styled-components';

type TShortcutProps = {
	$background?: string;
};

export const Shortcuts = styled.section`
	display: flex;

	width: 100%;
	height: 8.75rem;
	gap: ${theme.container.gap['g-3']};

	background: transparent;

	@media screen and (max-width: 1380px) {
        flex-wrap: wrap;
        margin-bottom: 7rem;
    }
	}
`;

export const Shortcut = styled.div<TShortcutProps>`
	min-width: 12.825rem;
	width: calc(100% / 5);

	display: flex;
	flex-direction: column;

	border-radius: ${theme.container.borderRadius['br-2']};
	background: ${({ $background }) => (!!$background ? $background : colors.white)};

	padding: ${theme.container.gap['g-3']};

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Highlight = styled.span`
	display: flex;
	color: ${colors.green[100]};

	font-weight: 300;
	font-size: ${theme.fontSize['fs-2']};
`;

export const Label = styled.span`
	display: flex;
	align-items: flex-end;

	height: 100%;
	color: ${colors.gray[100]};

	font-weight: 300;
	font-size: ${theme.fontSize['fs-4']};
`;

export const Title = styled.span`
	display: flex;
	align-items: flex-end;

	color: ${colors.gray[100]};

	font-weight: 700;
	font-size: ${theme.fontSize['fs-2']};
`;

export const Tag = styled.span`
	display: flex;
	align-items: center;
	width: fit-content;
	max-height: 1.375rem;

	font-size: ${theme.fontSize['fs-6']};

	color: ${colors.white};
	background: ${colors.green[100]};
	border-radius: ${theme.container.borderRadius['br-2']};
	padding: ${theme.container.padding['p-1']} ${theme.container.padding['p-3']};
`;
