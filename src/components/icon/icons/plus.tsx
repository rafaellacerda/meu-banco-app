import { TIconProps } from '../types';

export default function SearchIcon({ width = 33, height = 32, color = '#484848' }: TIconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x={0.399902} width={width} height={height} rx={16} fill={color} />
			<path
				d="M22.207 17.92H17.443V22.948H15.343V17.92H10.603V15.976H15.343V10.96H17.443V15.976H22.207V17.92Z"
				fill="white"
			/>
		</svg>
	);
}
