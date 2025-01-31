import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { ROUTES, TRoutes } from '../../routes/routes';

import { colors } from '@/theme/colors';
import { Box } from '@/components/box/box';
import { Icon } from '@/components/icon/icon';
import { Button } from '@/components/button/button';

import { Header, Item, ListNav, Nav, Footer, WrapperBox, TitleFooter, SubtitleFooter } from './styles';

export function Sidebar() {
	const location = useLocation();
	const [activeUrl, setActiveUrl] = useState('');

	useEffect(() => {
		setActiveUrl(location.pathname);
	}, [location]);

	return (
		<Nav>
			<Header>
				<img src={logo} />
			</Header>
			<ListNav>
				{ROUTES.map((item: TRoutes, index) => (
					<Item active={activeUrl === item.href} key={`${item.name}-${index}`}>
						<Link to={item.href}>
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
								}
							/>
							{item.name}
						</Link>
					</Item>
				))}
			</ListNav>
			<Footer>
				<WrapperBox>
					<Box background={colors.green[100]}>
						<TitleFooter>
							<span>Precisa</span>
							<span> de ajuda?</span>
						</TitleFooter>
						<SubtitleFooter>Fale com um dos nossos especialistas</SubtitleFooter>
						<Button>Contatar</Button>
					</Box>
				</WrapperBox>
			</Footer>
		</Nav>
	);
}
