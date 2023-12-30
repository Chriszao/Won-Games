import { type ButtonHTMLAttributes, type ReactNode } from "react";

import * as S from "./styles";

export type ButtonProps = {
	children?: ReactNode;
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
	icon,
	children,
	size = "medium",
	fullWidth = false,
	...props
}: ButtonProps) {
	return (
		<S.Wrapper $hasIcon={!!icon} $fullWidth={fullWidth} $size={size} {...props}>
			{!!icon && icon}
			{!!children && <span>{children}</span>}
		</S.Wrapper>
	);
}
