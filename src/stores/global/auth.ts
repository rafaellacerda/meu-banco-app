import { atom, createStore } from 'jotai';

export const authStore: ReturnType<typeof createStore> = createStore();

export const userLoggedAtom = atom(false);

export const teste = () => {
	authStore.set(userLoggedAtom, true);
};
