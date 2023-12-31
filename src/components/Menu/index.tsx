import {
	ShoppingCart as ShoppingCartIcon,
	Search as SearchIcon,
	Close as CloseIcon,
} from "@styled-icons/material-outlined";
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill";
import { useState } from "react";

import { Logo } from "~/components/Logo";

import { Button } from "../Button";
import { MediaMatch } from "../MediaMatch";
import * as S from "./styles";

export type MenuProps = {
	userName?: string;
};

export function Menu({ userName }: MenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Wrapper>
			<MediaMatch $lessThan="medium">
				<S.IconWrapper>
					<MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
				</S.IconWrapper>
			</MediaMatch>

			<S.LogoWrapper>
				<Logo hideOnMobile />
			</S.LogoWrapper>

			<MediaMatch $greaterThan="medium">
				<S.MenuLink href="#">Home</S.MenuLink>
				<S.MenuLink href="#">Explore</S.MenuLink>
			</MediaMatch>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="Search" />
				</S.IconWrapper>

				<S.IconWrapper>
					<ShoppingCartIcon aria-label="Open Shopping Cart" />
				</S.IconWrapper>

				{!userName && (
					<MediaMatch $greaterThan="medium">
						<Button>Sign in</Button>
					</MediaMatch>
				)}
			</S.MenuGroup>

			<S.MenuFull $isOpen={isOpen} aria-hidden={!isOpen}>
				<CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

				<S.MenuNav>
					<S.MenuLink href="#">Home</S.MenuLink>
					<S.MenuLink href="#">Explore</S.MenuLink>

					{!!userName && (
						<>
							<S.MenuLink href="#">My account</S.MenuLink>
							<S.MenuLink href="#">Wishlist</S.MenuLink>
						</>
					)}
				</S.MenuNav>

				{!userName && (
					<S.RegisterBox>
						<Button fullWidth size="large">
							Log in now
						</Button>

						<span>or</span>

						<S.CreateAccount href="#" title="Sign Up">
							Sign Up
						</S.CreateAccount>
					</S.RegisterBox>
				)}
			</S.MenuFull>
		</S.Wrapper>
	);
}
