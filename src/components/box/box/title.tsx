import { Title } from '../styles';

type BoxTitleProps = {
	text: string;
};

export function BoxTitle({ text }: BoxTitleProps) {
	return <Title>{text}</Title>;
}
