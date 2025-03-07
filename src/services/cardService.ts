import api, { Response } from './api';
import { Transaction } from '../entities/transaction';
import { Card } from '@/entities/card';

type TTransactionProps = {
	cardId: number;
};

type TCardProps = TTransactionProps;

export async function getCardData({ cardId }: TCardProps) {
	const { data } = await api.get(`/cards`);

	// mock de filtragem por nao ter api
	const card = data.find((item: Card) => +item.id === +cardId);

	return {
		success: true,
		data: card,
	};
}

export async function cardTransactions({ cardId }: TTransactionProps): Promise<Response> {
	const { data } = await api.get(`/cardTransactions`);

	// mock de filtragem por nao ter api
	const transactions = data.filter((item: Transaction) => +item.cardId === +cardId);
	transactions.sort((a: Transaction, b: Transaction) => {
		const dateA: any = new Date(a.date.split('/').reverse().join('-'));
		const dateB: any = new Date(b.date.split('/').reverse().join('-'));
		return dateB - dateA;
	});

	return { success: true, data: transactions };
}

export async function getLastTransaction({ cardId }: TTransactionProps): Promise<Response> {
	const { data } = await api.get(`/cardTransactions`);

	// mock de filtragem por nao ter api
	const transactions = data.filter((item: Transaction) => +item.cardId === +cardId);
	const lastTransaction = data.reduce(
		(max: Transaction, transacao: Transaction) => (transacao.date > max.date ? transacao : max),
		transactions[0],
	);

	return { success: true, data: lastTransaction };
}
