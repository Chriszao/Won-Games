import { screen } from "@testing-library/react";

import { renderWithTheme } from "~/utils/tests";

import { Banner, type BannerProps } from ".";

describe("<Banner />", () => {
	const props: BannerProps = {
		title: "Defy death",
		subtitle: "<p>Play the new <strong>Crashlands</strong> season</p>",
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		buttonLabel: "Buy now",
		buttonLink: "/games/defy-death",
	};

	it("should render correctly", () => {
		renderWithTheme(<Banner {...props} />);

		expect(
			screen.getByRole("heading", { name: /Defy death/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /Play the new Crashlands season/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("img", { name: /Defy death/i }),
		).toBeInTheDocument();
	});
});
