import { type ReactNode } from "react";

import * as S from "./styles";

export type ButtonProps = {
	children?: ReactNode;
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
};

export function Button({
	children,
	size = "medium",
	fullWidth = false,
}: ButtonProps) {
	return (
		<S.Wrapper $fullWidth={fullWidth} $size={size}>
			{!!children && <span>{children}</span>}
		</S.Wrapper>
	);
}
