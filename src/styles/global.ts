"use client";

import { type NamedExoticComponent } from "react";
import { createGlobalStyle, css } from "styled-components";

type GlobalStylesProps = {
	$removeBg?: boolean;
};

export const GlobalStyles: NamedExoticComponent<GlobalStylesProps> = createGlobalStyle`
	${({ theme, $removeBg }) => css`
		@font-face {
			font-display: swap;
			font-family: ${theme.font.family};
			font-style: normal;
			font-weight: ${theme.font.light};
			src: url("/fonts/poppins-v20-latin-300.woff2") format("woff2");
		}

		@font-face {
			font-display: swap;
			font-family: ${theme.font.family};
			font-style: normal;
			font-weight: ${theme.font.normal};
			src: url("/fonts/poppins-v20-latin-regular.woff2") format("woff2");
		}

		@font-face {
			font-display: swap;
			font-family: ${theme.font.family};
			font-style: normal;
			font-weight: ${theme.font.bold};
			src: url("/fonts/poppins-v20-latin-600.woff2") format("woff2");
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;

			&::before,
			&::after {
				box-sizing: inherit;
			}
		}

		html {
			font-size: 62.5%; // 1rem = 10px
		}

		html,
		body,
		#__next {
			height: 100%;
		}

		body {
			font-family: "Poppins", --apple-system, BlinkMacSystemFont, "Segoe UI",
				Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
				sans-serif;
			font-size: ${theme.font.sizes.medium};
			${!$removeBg &&
			css`
				background-color: ${theme.colors.mainBg};
			`}
		}
	`}
`;
