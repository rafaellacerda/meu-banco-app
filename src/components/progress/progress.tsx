import { Progress as ProgressComponent } from './styles';

type TProgressProps = { percent: number; maxWidth?: string };

export function Progress({ percent, maxWidth }: TProgressProps) {
	return <ProgressComponent width={percent} maxWidth={maxWidth} />;
}
