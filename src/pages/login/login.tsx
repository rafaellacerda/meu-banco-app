import logoBanco from '../../assets/logo-white.png';

import { Input } from '@/components/input/input';
import { Button } from '@/components/button/button';
import { ButtonLink } from '@/components/buttonLink/buttonLink';
import { Checkbox } from '@/components/checkbox/checkbox';

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
import { useNavigate } from 'react-router-dom';

import { teste } from '../../stores/global/auth';

export default function Login() {
	const navigate = useNavigate();

	const handleSubmit = () => {
		teste();
		navigate('/dashboard');
	};

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

					<form onSubmit={handleSubmit} className="space-y-6" noValidate>
						<div>
							<Input
								label="Usuário"
								id="username"
								type="text"
								// value={username}
								// onChange={e => setUsername(e.target.value)}
								required
							/>
						</div>

						<div>
							<Input
								label="Senha"
								id="password"
								type="password"
								// value={password}
								// onChange={e => setPassword(e.target.value)}
								required
							/>
						</div>

						<GroupButtonUser>
							<Checkbox id="remember" label="Lembrar dispositivo" />
							<ButtonLink variant="link">Esqueceu sua senha?</ButtonLink>
						</GroupButtonUser>

						<Button type="button" onClick={handleSubmit} isLoading={false}>
							ENTRAR
						</Button>
					</form>

					<GroupNewAccount>
						<span>Não tem conta? </span>
						<ButtonLink size="fs-2">Faça uma agora</ButtonLink>
					</GroupNewAccount>
				</Wrapper>
			</ContainerForm>
		</Main>
	);
}
