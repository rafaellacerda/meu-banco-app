import styled, { css } from 'styled-components';

type TFlexProps = {
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

	width?: string;
	height?: string;

	maxWidth?: string;
};

export const Flex = styled.div<TFlexProps>`
	display: flex;
	align-items: ${({ align }) => align || 'stretch'};
	justify-content: ${({ justify }) => justify || 'flex-start'};
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};

	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};

	${({ maxWidth }) =>
		!!maxWidth &&
		css`
			max-width: ${maxWidth};
		`}

	text-align: left;
`;
