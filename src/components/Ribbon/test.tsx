import { screen } from "@testing-library/react";

import { theme } from "~/styles/theme";
import { renderWithTheme } from "~/utils/tests";

import { Ribbon } from ".";

describe("<Ribbon />", () => {
	it("should render the text correctly", () => {
		const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

		expect(screen.getByText(/Best Seller/i)).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});

	it("should render with the primary color by default", () => {
		renderWithTheme(<Ribbon>Best Seller</Ribbon>);

		expect(screen.getByText(/Best Seller/i)).toHaveStyle({
			backgroundColor: theme.colors.primary,
		});
	});

	it("should render with the secondary color by default", () => {
		renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

		expect(screen.getByText(/Best Seller/i)).toHaveStyle({
			backgroundColor: theme.colors.secondary,
		});
	});

	it("should render with the normal size by default", () => {
		renderWithTheme(<Ribbon>Best Seller</Ribbon>);

		expect(screen.getByText(/Best Seller/i)).toHaveStyle({
			height: "3.6rem",
			fontSize: theme.font.sizes.small,
		});
	});

	it("should render with the small size if passed", () => {
		renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

		expect(screen.getByText(/Best Seller/i)).toHaveStyle({
			height: "2.6rem",
			fontSize: theme.font.sizes.xsmall,
		});
	});
});
