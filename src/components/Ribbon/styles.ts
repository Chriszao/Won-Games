"use-client";

import styled, { type DefaultTheme, css } from "styled-components";

import { type RibbonSizes, type RibbonColors } from ".";

type WrapperProps = {
	$color: RibbonColors;
	$size: RibbonSizes;
};

const wrapperModifiers = {
	color: (theme: DefaultTheme, color: RibbonColors) => css`
		background-color: ${theme.colors[color]};
	`,

	small: (theme: DefaultTheme) => css`
		height: 2.6rem;
		font-size: ${theme.font.sizes.xsmall};
	`,

	normal: (theme: DefaultTheme) => css`
		height: 3.6rem;
		font-size: ${theme.font.sizes.small};
	`,
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, $color, $size }) => css`
		${wrapperModifiers.color(theme, $color)}

		${wrapperModifiers[$size](theme)}
	`}
`;
