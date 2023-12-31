"use-client";

import { darken } from "polished";
import styled, { type DefaultTheme, css } from "styled-components";

import { type RibbonSizes, type RibbonColors } from ".";

type WrapperProps = {
	$color: RibbonColors;
	$size: RibbonSizes;
};

const wrapperModifiers = {
	color: (theme: DefaultTheme, color: RibbonColors) => css`
		background-color: ${theme.colors[color]};

		&::before {
			border-left-color: ${darken(0.2, theme.colors[color])};
			border-top-color: ${darken(0.2, theme.colors[color])};
		}
	`,

	small: (theme: DefaultTheme) => css`
		height: 2.6rem;
		font-size: ${theme.font.sizes.xsmall};
		padding: 0 ${theme.spacings.xsmall};
		right: -1.5rem;

		&::before {
			top: 2.6rem;
			border-top-width: 0.7rem;
			border-right-width: 1.5rem;
		}
	`,

	normal: (theme: DefaultTheme) => css`
		height: 3.6rem;
		font-size: ${theme.font.sizes.small};
		padding: 0 ${theme.spacings.small};
		right: -2rem;

		&::before {
			top: 3.6rem;
			border-top-width: 1rem;
			border-right-width: 2rem;
		}
	`,
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, $color, $size }) => css`
		position: absolute;
		top: ${theme.spacings.xsmall};
		display: flex;
		align-items: center;
		font-weight: ${theme.font.bold};
		color: ${theme.colors.white};

		&::before {
			content: "";
			position: absolute;
			right: 0;
			border-style: solid;
			border-left-width: 0;
			border-right-color: transparent;
			border-bottom-color: transparent;
			border-bottom-width: 1rem;
		}

		${wrapperModifiers.color(theme, $color)}
		${wrapperModifiers[$size](theme)};
	`}
`;
