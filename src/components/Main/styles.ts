"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
	${({ theme }) => css`
		background-color: ${theme.colors.mainBg};
		color: ${theme.colors.white};
		width: 100%;
		height: 100%;
		padding: 3rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
`;
