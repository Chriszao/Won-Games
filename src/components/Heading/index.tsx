import { type ReactNode } from "react";

import * as S from "./styles";

export type HeadingProps = {
	children: ReactNode;
	color?: "white" | "black";
	lineLeft?: boolean;
	lineBottom?: boolean;
};

export function Heading({
	children,
	color = "white",
	lineLeft = false,
	lineBottom = false,
}: HeadingProps) {
	return (
		<S.Wrapper $lineBottom={lineBottom} $lineLeft={lineLeft} $color={color}>
			{children}
		</S.Wrapper>
	);
}
