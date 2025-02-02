import { ErrorMessage } from '../styles';

type TErrorProps = {
	text: string;
};

export function InputError({ text }: TErrorProps) {
	return <ErrorMessage>{text}</ErrorMessage>;
}
