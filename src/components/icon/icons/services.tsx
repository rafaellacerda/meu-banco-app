import { TIconProps } from '../types';

export default function ServicesIcon({ width = 16, height = 16, color = '#484848' }: TIconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.5 15.6332H4.25V11.8832H0.5V15.6332ZM11.75 15.6332H15.5V11.8832H11.75V15.6332ZM0.5 4.38318H4.25V0.633179H0.5V4.38318ZM11.75 0.633179V4.38318H15.5V0.633179H11.75ZM6.125 4.38318H9.875V0.633179H6.125V4.38318ZM6.125 15.6332H9.875V11.8832H6.125V15.6332ZM11.75 10.0082H15.5V6.25818H11.75V10.0082ZM6.125 10.0082H9.875V6.25818H6.125V10.0082ZM0.5 10.0082H4.25V6.25818H0.5V10.0082Z"
				fill={color}
			/>
		</svg>
	);
}
