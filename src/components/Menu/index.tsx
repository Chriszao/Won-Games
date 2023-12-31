import {
	ShoppingCart as ShoppingCartIcon,
	Search as SearchIcon,
	Close as CloseIcon,
} from "@styled-icons/material-outlined";
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill";
import { useState } from "react";

import { Logo } from "~/components/Logo";

import * as S from "./styles";

export function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Wrapper>
			<S.IconWrapper>
				<MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
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

			<S.MenuFull $isOpen={isOpen} aria-hidden={!isOpen}>
				<CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
			</S.MenuFull>
		</S.Wrapper>
	);
}
