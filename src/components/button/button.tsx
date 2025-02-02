import { ComponentProps } from 'react';

import { Icon } from '../icon/icon';
import { Button as ButtonComponent, Spinner } from './styles';

interface ButtonProps extends ComponentProps<'button'> {
	isLoading?: boolean;
	$variant?: 'danger' | 'silver';
}

export function Button({ className, isLoading, disabled, children, $variant, ...props }: ButtonProps) {
	return (
		<ButtonComponent $variant={$variant} {...props} disabled={disabled || isLoading}>
			{!isLoading && children}
			{isLoading && (
				<Spinner>
					<Icon type="spinner" />
				</Spinner>
			)}
		</ButtonComponent>
	);
}
