import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { ROUTES, TRoutes } from '../../routes/routes';

import { colors } from '@/theme/colors';
import { Box } from '@/components/box/box';
import { Icon } from '@/components/icon/icon';
import { Button } from '@/components/button/button';

import {
	Header,
	Item,
	ListNav,
	Nav,
	Footer,
	WrapperBox,
	TitleFooter,
	SubtitleFooter,
	WrapperButton,
	IconSection,
} from './styles';

export function Sidebar() {
	const navigate = useNavigate();
	const location = useLocation();

	const [activeUrl, setActiveUrl] = useState('');

	useEffect(() => {
		setActiveUrl(location.pathname);
		if (!ROUTES.find(item => item.href === location.pathname)) navigate('/404');
	}, [location]);

	return (
		<Nav>
			<Header>
				<img src={logo} />
			</Header>
			<ListNav>
				{ROUTES.map((item: TRoutes, index) => (
					<Item $active={(activeUrl === item.href) as boolean} key={`${item.name}-${index}`}>
						<Link to={item.href}>
							<IconSection>
								<Icon
									type={
										item.icon as
											| 'bell'
											| 'home'
											| 'plus'
											| 'search'
											| 'services'
											| 'settings'
											| 'transfer'
											| 'user'
											| 'wallet'
											| 'spinner'
											| 'mastercard'
									}
								/>
							</IconSection>
							{item.name}
						</Link>
					</Item>
				))}
			</ListNav>
			<Footer>
				<WrapperBox>
					<Box $background={colors.green[100]} $containerPage={true}>
						<TitleFooter>
							<span>Precisa</span>
							<span> de ajuda?</span>
						</TitleFooter>
						<SubtitleFooter>Fale com um dos nossos especialistas</SubtitleFooter>
						<WrapperButton>
							<Button $variant="silver">Contatar</Button>
						</WrapperButton>
					</Box>
				</WrapperBox>
			</Footer>
		</Nav>
	);
}
