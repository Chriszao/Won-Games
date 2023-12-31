import { type ReactNode } from "react";

import * as S from "./styles";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "normal" | "small";

export type RibbonProps = {
	children: ReactNode;
	color?: RibbonColors;
	size?: RibbonSizes;
};

export function Ribbon({
	children,
	color = "primary",
	size = "normal",
}: RibbonProps) {
	return (
		<S.Wrapper $size={size} $color={color}>
			{children}
		</S.Wrapper>
	);
}
