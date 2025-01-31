export interface Card {
	id: number;
	limit: number;
	userId: number;
	number: number;
	brand: 'MASTERCARD' | 'VISA' | 'ELO';
	type: 'CREDIT' | 'DEBIT' | 'MULTIPLE';
}
