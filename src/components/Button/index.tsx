import {
	type ElementType,
	type AnchorHTMLAttributes,
	type ButtonHTMLAttributes,
	type ReactNode,
} from "react";

import * as S from "./styles";

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	icon?: ReactNode;
	as?: ElementType;
} & ButtonTypes;

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
