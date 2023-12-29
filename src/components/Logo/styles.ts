"use-client";

import styled, { css } from "styled-components";

import { type LogoProps } from ".";

export const Wrapper = styled.div<LogoProps>`
	${({ theme, color }) => css`
		color: ${theme.colors[color!]};
	`}
`;