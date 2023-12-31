import Link from "next/link";

import { Heading } from "../Heading";
import { Logo } from "../Logo";
import * as S from "./styles";

export function Footer() {
	return (
		<S.Wrapper>
			<Logo color="black" />

			<S.Content>
				<S.Column>
					<Heading lineBottom color="black" size="small" lineColor="secondary">
						Contact
					</Heading>

					<a href="mailto:chris.f.assis18@gmail.com">
						chris.f.assis18@gmail.com
					</a>

					<a href="https://wa.link/klqmd8">+55 (11) 99330-3722</a>
				</S.Column>

				<S.Column>
					<Heading lineBottom color="black" size="small" lineColor="secondary">
						Follow Us
					</Heading>

					<nav aria-labelledby="social media">
						<a
							href="https://www.instagram.com/_chriszao_/"
							target="_blank"
							rel="noopener, noreferrer"
						>
							Instagram
						</a>

						<a
							href="https://twitter.com/Chriszao2"
							target="_blank"
							rel="noopener, noreferrer"
						>
							Twitter/X
						</a>

						<a
							href="https://github.com/Chriszao"
							target="_blank"
							rel="noopener, noreferrer"
						>
							Github
						</a>

						<a
							href="https://www.linkedin.com/in/christofer-assis-963380149/"
							target="_blank"
							rel="noopener, noreferrer"
						>
							LinkedIn
						</a>
					</nav>
				</S.Column>

				<S.Column>
					<Heading lineBottom color="black" size="small" lineColor="secondary">
						Links
					</Heading>

					<nav aria-labelledby="footer resources">
						<Link href="/">Home</Link>
						<Link href="/games">Store</Link>
						<Link href="/search">Search</Link>
					</nav>
				</S.Column>

				<S.Column>
					<Heading lineBottom color="black" size="small" lineColor="secondary">
						Location
					</Heading>

					<span>Some Address</span>
					<span>123 - 01234-567</span>
					<span>Mogi das Cruzes, SP - Brasil</span>
				</S.Column>
			</S.Content>

			<S.CopyRight>Won Games 2023 © All rights reserved.</S.CopyRight>
		</S.Wrapper>
	);
}
