import { screen } from "@testing-library/react";

import { renderWithTheme } from "~/utils/tests";

import { Footer } from ".";

describe("<Footer />", () => {
	it("should render 4 column topics", () => {
		const { container } = renderWithTheme(<Footer />);

		for (const name of [/Contact/i, /Follow Us/i, /Links/i, /Location/i]) {
			expect(screen.getByRole("heading", { name: name })).toBeInTheDocument();
		}

		expect(container.firstChild).toMatchSnapshot();
	});
});
