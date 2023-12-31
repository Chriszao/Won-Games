import { type ReactNode } from "react";

import { Button } from "../Button";
import { Ribbon, type RibbonColors, type RibbonSizes } from "../Ribbon";
import * as S from "./styles";

export type BannerProps = {
	img: string;
	title: string;
	subtitle: string;
	buttonLink: string;
	buttonLabel: string;
	ribbon?: ReactNode;
	ribbonSize?: RibbonSizes;
	ribbonColor?: RibbonColors;
};

export function Banner({
	img,
	title,
	subtitle,
	buttonLink,
	buttonLabel,
	ribbon,
	ribbonColor = "primary",
	ribbonSize = "normal",
}: BannerProps) {
	return (
		<S.Wrapper>
			{!!ribbon && (
				<Ribbon color={ribbonColor} size={ribbonSize}>
					{ribbon}
				</Ribbon>
			)}

			<S.Image src={img} role="img" aria-label={title} />

			<S.Caption>
				<S.Title>{title}</S.Title>

				<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

				<Button as="a" size="large" href={buttonLink}>
					{buttonLabel}
				</Button>
			</S.Caption>
		</S.Wrapper>
	);
}
