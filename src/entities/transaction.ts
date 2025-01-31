export interface Transaction {
	id: number;
	date: string;
	value: number;
	cardId: number;
	description: string;
	type: 'DEBIT' | 'CREDIT';
}
