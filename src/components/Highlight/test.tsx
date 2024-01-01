import { screen } from "@testing-library/react";

import { renderWithTheme } from "~/utils/tests";

import { Highlight, type HighlightProps } from ".";
import * as S from "./styles";

describe("<Highlight />", () => {
	const props: HighlightProps = {
		title: "Heading 1",
		subtitle: "Heading 2",
		buttonLabel: "Buy now",
		buttonLink: "/games/defy-death",
		backgroundImage: "/img/red-dead-img.jpg",
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

	it("should render background image", () => {
		const { container } = renderWithTheme(<Highlight {...props} />);

		expect(container.firstChild).toHaveStyle({
			"background-image": `url(${props.backgroundImage})`,
		});
	});

	it("should render float image", () => {
		renderWithTheme(
			<Highlight floatImage="/img/red-dead-float.jpg" {...props} />,
		);

		expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
			"src",
			"/img/red-dead-float.jpg",
		);
	});

	it("should render align right by default", () => {
		const { container } = renderWithTheme(<Highlight {...props} />);

		expect(container.firstChild).toHaveStyleRule(
			"grid-template-areas",
			'"floatImage content"',
		);
		expect(container.firstChild).toHaveStyleRule("text-align", "right", {
			modifier: `${S.Content}`,
		});
	});

	it("should render align left when passed", () => {
		const { container } = renderWithTheme(
			<Highlight alignment="left" {...props} />,
		);

		expect(container.firstChild).toHaveStyleRule(
			"grid-template-areas",
			'"content floatImage"',
		);
		expect(container.firstChild).toHaveStyleRule("text-align", "left", {
			modifier: `${S.Content}`,
		});
	});
});
