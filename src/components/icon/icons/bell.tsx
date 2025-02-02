import { TIconProps } from '../types';

export default function SearchIcon({ width = 21, height = 20, color = '#FFF' }: TIconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.32955 7.15942C5.32955 4.30995 7.6395 2 10.489 2C13.3385 2 15.6484 4.30995 15.6484 7.15942V7.79711C15.6484 9.32793 15.8562 10.685 16.173 11.6353C16.3326 12.1141 16.5073 12.4513 16.6675 12.6546C16.7861 12.8051 16.8569 12.8355 16.8731 12.8406C17.2539 12.8446 17.5614 13.1545 17.5614 13.5362V13.6812C17.5614 14.0654 17.25 14.3768 16.8658 14.3768H4.11216C3.72795 14.3768 3.4165 14.0654 3.4165 13.6812V13.5362C3.4165 13.1545 3.72399 12.8446 4.1048 12.8406C4.12103 12.8355 4.19181 12.8051 4.31042 12.6546C4.47063 12.4513 4.64533 12.1141 4.80493 11.6353C5.12169 10.685 5.32955 9.32793 5.32955 7.79711V7.15942ZM4.10119 12.8415L4.10307 12.8411L4.10197 12.8414L4.10119 12.8415Z"
				fill={color}
			/>
			<path
				d="M8.57603 15.5652C8.31339 15.5652 8.07313 15.7131 7.95488 15.9476C7.83662 16.1822 7.86053 16.4633 8.01668 16.6744C8.59554 17.4573 9.46999 18 10.4891 18C11.5081 18 12.3826 17.4573 12.9615 16.6744C13.1176 16.4633 13.1415 16.1822 13.0232 15.9476C12.905 15.7131 12.6648 15.5652 12.4021 15.5652H8.57603Z"
				fill={color}
			/>
		</svg>
	);
}
