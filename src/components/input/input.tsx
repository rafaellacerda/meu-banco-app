import { ComponentProps, forwardRef } from 'react';
import { Input as InputComponent, Group, Label, WrapperInput } from './styles';
import { Icon } from '../icon/icon';
import { colors } from '@/theme/colors';
// import { CrossCircledIcon } from '@radix-ui/react-icons';

interface InputProps extends ComponentProps<'input'> {
	name?: string;
	label?: string;
	error?: string;
	variant?: 'silver';
	height?: 'md' | 'lg';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ placeholder, name, id, error, className, type, label, variant, height = 'lg', ...props }, ref) => {
		const inputId = id ?? name;

		return (
			<Group>
				{!!label && <Label htmlFor={inputId}>{label}</Label>}

				<WrapperInput variant={variant} height={height}>
					{type === 'search' && (
						<span>
							<Icon type="search" color={variant === 'silver' ? colors.white : colors.gray[100]} />
						</span>
					)}
					<InputComponent
						{...props}
						ref={ref}
						name={name}
						id={inputId}
						type={type}
						placeholder={placeholder}
						variant={variant}
						autoComplete="false"
					/>
				</WrapperInput>

				{error && (
					<div className="flex gap-2 items-center mt-2 text-red-900">
						<span className="text-xs">{error}</span>
					</div>
				)}
			</Group>
		);
	},
);
