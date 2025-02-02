import { ptBR } from 'date-fns/locale';
import { format, parse } from 'date-fns';

export const formatCurrency = (number: number): string => {
	if (!number) return 'R$ 0,00';

	return number.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};

export const formatThousands = (number: number): string => {
	if (!number) return '0,00';

	return number.toLocaleString('pt-br');
};

export const shortMonth = (date: string) => {
	return format(parse(date, 'dd/MM/yyyy', new Date()), 'dd/MMM', { locale: ptBR });
};
