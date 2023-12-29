import { screen } from "@testing-library/react";

import { theme } from "~/styles/theme";
import { renderWithTheme } from "~/utils/tests";

import { Logo } from ".";

describe("<Logo />", () => {
	it("should render a white label by default", () => {
		renderWithTheme(<Logo />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: theme.colors.white,
		});
	});

	it("should render a black label when color is passed", () => {
		renderWithTheme(<Logo color="black" />);

		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: theme.colors.black,
		});
	});
});
