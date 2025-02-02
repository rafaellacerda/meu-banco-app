import { ComponentProps, forwardRef } from 'react';
import { Checkbox as CheckboxComponent, InputCheckbox, LabelCheckbox } from './styles';

interface CheckboxProps extends ComponentProps<'input'> {
	name?: string;
	label?: string;
	error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ placeholder, name, id, error, className, type, label, ...props }, ref) => {
		const inputId = id ?? name;

		return (
			<CheckboxComponent>
				<InputCheckbox type="checkbox" {...props} ref={ref} name={name} id={inputId} />
				<LabelCheckbox htmlFor={inputId}>
					<span>
						<svg width="12px" height="10px" viewBox="0 0 12 10">
							<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
						</svg>
					</span>
					<span>{label}</span>
				</LabelCheckbox>
			</CheckboxComponent>
		);
	},
);
