import { ComponentProps, forwardRef } from 'react';
import { Input as InputComponent, Group, Label } from './styles';
// import { CrossCircledIcon } from '@radix-ui/react-icons';

interface InputProps extends ComponentProps<'input'> {
	name?: string;
	label?: string;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ placeholder, name, id, error, className, type, label, ...props }, ref) => {
		const inputId = id ?? name;

		return (
			<Group>
				{!!label && <Label htmlFor={inputId}>{label}</Label>}
				<InputComponent {...props} ref={ref} name={name} id={inputId} type={type} placeholder={placeholder} />
				{error && (
					<div className="flex gap-2 items-center mt-2 text-red-900">
						<span className="text-xs">{error}</span>
					</div>
				)}
			</Group>
		);
	},
);
