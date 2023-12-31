import { type ReactNode } from "react";

import * as S from "./styles";

export type LineColors = "primary" | "secondary";

export type HeadingProps = {
	children: ReactNode;
	color?: "white" | "black";
	lineLeft?: boolean;
	lineBottom?: boolean;
	size?: "small" | "medium";
	lineColor?: LineColors;
};

export function Heading({
	children,
	color = "white",
	lineLeft = false,
	lineBottom = false,
	size = "medium",
	lineColor = "primary",
}: HeadingProps) {
	return (
		<S.Wrapper
			$lineColor={lineColor}
			$size={size}
			$lineBottom={lineBottom}
			$lineLeft={lineLeft}
			$color={color}
		>
			{children}
		</S.Wrapper>
	);
}
