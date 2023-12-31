import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import { screen } from "@testing-library/react";

import { theme } from "~/styles/theme";
import { renderWithTheme } from "~/utils/tests";

import { Button } from ".";

describe("<Button />", () => {
	it("should render the medium size by default", () => {
		const { container } = renderWithTheme(<Button>Buy now</Button>);

		expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
			height: "4rem",
			"font-size": theme.font.sizes.small,
			padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
		});

		expect(container.firstChild).toMatchSnapshot();
	});

	it("should render the small size when passed", () => {
		renderWithTheme(<Button size="small">Buy now</Button>);

		expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
			height: "3rem",
			"font-size": theme.font.sizes.xsmall,
		});
	});

	it("should render the large size when passed", () => {
		renderWithTheme(<Button size="large">Buy now</Button>);

		expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
			height: "5rem",
			"font-size": theme.font.sizes.medium,
			padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
		});
	});

	it("should render the fullWidth size when passed", () => {
		renderWithTheme(<Button fullWidth>Buy now</Button>);

		expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
			width: "100%",
		});
	});

	it("should render an icon version", () => {
		renderWithTheme(
			<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
		);

		expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
		expect(screen.getByTestId("icon")).toBeInTheDocument();
	});

	it("should render button as a link", () => {
		renderWithTheme(
			<Button as="a" href="/link">
				Buy now
			</Button>,
		);

		expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
			"href",
			"/link",
		);
	});
});
