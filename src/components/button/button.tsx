import { ComponentProps } from 'react';
import { Button as ButtonComponent } from './styles';
// import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
	isLoading?: boolean;
	variant?: 'danger';
}

export function Button({ className, isLoading, disabled, children, variant, ...props }: ButtonProps) {
	return (
		<ButtonComponent {...props} disabled={disabled || isLoading}>
			{!isLoading && children}
			{/* {isLoading && <Spinner className="w-6 h-6" />} */}
		</ButtonComponent>
	);
}
