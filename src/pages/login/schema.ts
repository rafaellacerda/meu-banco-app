import { z } from 'zod';

export const schema = z.object({
	name: z
		.string()
		.min(1, 'Usuário é obrigatório')
		.regex(/^[A-Za-z]+$/i, 'Somente letras são permitidas'),
	password: z.string().nonempty('Senha é obrigatória'),
});

export type FormData = z.infer<typeof schema>;
