import { screen } from "@testing-library/react";

import { renderWithTheme } from "~/utils/tests";

import { Highlight, type HighlightProps } from ".";

describe("<Highlight />", () => {
	const props: HighlightProps = {
		title: "Heading 1",
		subtitle: "Heading 2",
		buttonLabel: "Buy now",
		buttonLink: "/games/defy-death",
	};

	it("should render headings and button", () => {
		renderWithTheme(<Highlight {...props} />);

		expect(
			screen.getByRole("heading", { name: /Heading 1/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /Heading 2/i }),
		).toBeInTheDocument();

		expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument();
	});
});
