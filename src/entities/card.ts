export interface Card {
	id: number;
	name: string;
	monthLimit: number;
	limit: number;
	userId: number;
	number: number;
	validate: string;
	brand: 'MASTERCARD' | 'VISA' | 'ELO' | null;
	type: 'CREDIT' | 'DEBIT' | 'MULTIPLE' | null;
}
