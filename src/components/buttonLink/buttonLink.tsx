import { ComponentProps } from 'react';
import { ButtonLink as ButtonLinkComponent } from './styles';

interface ButtonProps extends ComponentProps<'button'> {
	variant?: 'primary' | 'link';
	size?: 'fs-1' | 'fs-2' | 'fs-3' | 'fs-4' | 'fs-5' | 'fs-6';
}

export function ButtonLink({ className, disabled, children, variant, size, ...props }: ButtonProps) {
	return (
		<ButtonLinkComponent variant={variant} size={size} {...props}>
			{children}
		</ButtonLinkComponent>
	);
}
