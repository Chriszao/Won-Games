import {
	AddShoppingCart,
	FavoriteBorder,
} from "@styled-icons/material-outlined";
import Image from "next/image";

import { Button } from "../Button";
import * as S from "./styles";

export type GameCardProps = {
	title: string;
	developer: string;
	img: string;
	price: string;
	promotionalPrice?: string;
};

export function GameCard({
	img,
	price,
	title,
	developer,
	promotionalPrice,
}: GameCardProps) {
	return (
		<S.Wrapper>
			<S.ImageBox>
				<Image src={img} alt={title} width={300} height={140} />
			</S.ImageBox>

			<S.Content>
				<S.Info>
					<S.Title>{title}</S.Title>
					<S.Developer>{developer}</S.Developer>
				</S.Info>

				<S.FavButton role="button">
					<FavoriteBorder aria-label="Add to wishlist" />
				</S.FavButton>

				<S.BuyBox>
					{!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
					<S.Price>{promotionalPrice || price}</S.Price>
					<Button icon={<AddShoppingCart />} size="small" />
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
}
