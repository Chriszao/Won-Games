import {
	ShoppingCart as ShoppingCartIcon,
	Search as SearchIcon,
} from "@styled-icons/material-outlined";
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill";

import { Logo } from "~/components/Logo";

import * as S from "./styles";

export function Menu() {
	return (
		<S.Wrapper>
			<S.IconWrapper>
				<MenuIcon aria-label="Open Menu" />
			</S.IconWrapper>

			<S.LogoWrapper>
				<Logo hideOnMobile />
			</S.LogoWrapper>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="Search" />
				</S.IconWrapper>

				<S.IconWrapper>
					<ShoppingCartIcon aria-label="Open Shopping Cart" />
				</S.IconWrapper>
			</S.MenuGroup>
		</S.Wrapper>
	);
}
