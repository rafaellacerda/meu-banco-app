import logoBanco from '../../assets/logo-white.png';

import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/components/button/button';
import { Checkbox } from '@/components/checkbox/checkbox';
import { Input, InputItem } from '@/components/input/input';
import { ButtonLink } from '@/components/buttonLink/buttonLink';

import { schema, FormData } from './schema';
import { authentication } from '@/services/authService';
import { auth as authenticationStore } from '../../stores/global/auth';

import {
	BackgroundWoman,
	Overlay,
	Logo,
	Main,
	ContainerForm,
	Wrapper,
	TitleGroup,
	Title,
	Subtitle,
	GroupNewAccount,
	GroupButtonUser,
} from './styles';

export default function Login() {
	const form = useForm<FormData>({
		values: {
			name: '',
			password: '',
		},
		resetOptions: {
			keepDirtyValues: true,
		},
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		resolver: zodResolver(schema),
	});

	const navigate = useNavigate();
	const { handleSubmit: hookFormHandleSubmit, register, formState } = form;

	const handleSubmit = hookFormHandleSubmit(
		async data => {
			const auth = await authentication({ user: data.name, password: data.password });

			if (!auth.success) {
				toast.error('Usuário ou senha inválidos!');
				return;
			}

			authenticationStore({ token: auth.data });
			navigate('/dashboard');
		},
		errors => {
			console.log({ errors });
		},
	);

	return (
		<Main>
			<BackgroundWoman>
				<Logo src={logoBanco} />
				<Overlay />
			</BackgroundWoman>
			<ContainerForm>
				<Wrapper>
					<TitleGroup>
						<Title>
							Bem vindo <span>:)</span>
						</Title>
						<Subtitle>Entre na sua conta</Subtitle>
					</TitleGroup>

					<FormProvider {...form}>
						<form onSubmit={handleSubmit} className="space-y-6" noValidate>
							<div>
								<Input label="Usuário" id="username" type="text" {...register('name')} />
								<ErrorMessage
									errors={formState.errors}
									name="name"
									render={({ message }: { message: string }) => <InputItem.Error text={message} />}
								/>
							</div>

							<div>
								<Input label="Senha" id="password" type="password" {...register('password')} />
								<ErrorMessage
									errors={formState.errors}
									name="password"
									render={({ message }: { message: string }) => <InputItem.Error text={message} />}
								/>
							</div>

							<GroupButtonUser>
								<Checkbox id="remember" label="Lembrar dispositivo" />
								<ButtonLink $variant="link">Esqueceu sua senha?</ButtonLink>
							</GroupButtonUser>

							<Button type="button" onClick={handleSubmit} isLoading={false}>
								ENTRAR
							</Button>
						</form>
					</FormProvider>

					<GroupNewAccount>
						<span>Não tem conta? </span>
						<ButtonLink $size="fs-2">Faça uma agora</ButtonLink>
					</GroupNewAccount>
				</Wrapper>
			</ContainerForm>
		</Main>
	);
}
