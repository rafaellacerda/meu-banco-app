import api, { Response } from './api';
import { User } from '../entities/user';

type TAuthProps = {
	user: string;
	password: string;
};

export async function authentication({ user, password }: TAuthProps): Promise<Response> {
	const { data } = await api.get(`/user`);
	const userAuth = data.find((item: User) => item.user === user && item.password === password);

	if (!userAuth) return { success: false, data: null };

	// Montar um mock simples de token para retorno
	const token = btoa(JSON.stringify(userAuth));

	return { success: true, data: token };
}
