import { atom, createStore } from 'jotai';

type AuthProps = {
	token: string;
};

export const authStore: ReturnType<typeof createStore> = createStore();

export const userLoggedAtom = atom(false);
export const authUser = atom({
	id: '',
	name: '',
	user: '',
	taxid: '',
	password: '',
});

export const auth = ({ token }: AuthProps) => {
	setUserAuth({ token });
	authStore.set(userLoggedAtom, true);
	localStorage.setItem('@meubanco:auth', token);
};

export const loadUserAuth = () => {
	const token = localStorage.getItem('@meubanco:auth');
	if (!!token) setUserAuth({ token });
};

export const setUserAuth = ({ token }: AuthProps) => {
	const user = atob(token);

	authStore.set(userLoggedAtom, true);
	authStore.set(authUser, JSON.parse(user));
};

export const getAuthTokenStorage = async () => {
	return await localStorage.getItem('@meubanco:auth');
};

export const logout = () => {
	localStorage.removeItem('@meubanco:auth');

	authStore.set(userLoggedAtom, false);
	authStore.set(authUser, {
		id: '',
		name: '',
		user: '',
		taxid: '',
		password: '',
	});
};
