import { screen } from "@testing-library/react";

import { theme } from "~/styles/theme";
import { renderWithTheme } from "~/utils/tests";

import { GameCardSlider } from ".";
import { type GameCardProps } from "../GameCard";

describe("<GameCardSlider />", () => {
	const items: GameCardProps[] = [
		{
			img: "/img/game-card-img.png",
			title: "Population Zero",
			developer: "Rockstar Games",
			price: "R$ 235,00",
			promotionalPrice: "R$ 200,00",
		},
		{
			img: "/img/game-card-img.png",
			title: "Population Zero",
			developer: "Rockstar Games",
			price: "R$ 235,00",
			promotionalPrice: "R$ 200,00",
		},
		{
			img: "/img/game-card-img.png",
			title: "Population Zero",
			developer: "Rockstar Games",
			price: "R$ 235,00",
			promotionalPrice: "R$ 200,00",
		},
		{
			img: "/img/game-card-img.png",
			title: "Population Zero",
			developer: "Rockstar Games",
			price: "R$ 235,00",
			promotionalPrice: "R$ 200,00",
		},
		{
			img: "/img/game-card-img.png",
			title: "Population Zero",
			developer: "Rockstar Games",
			price: "R$ 235,00",
			promotionalPrice: "R$ 200,00",
		},
		{
			img: "/img/game-card-img.png",
			title: "Population Zero",
			developer: "Rockstar Games",
			price: "R$ 235,00",
			promotionalPrice: "R$ 200,00",
		},
	];

	it("should render with 4 active items", () => {
		const { container } = renderWithTheme(<GameCardSlider items={items} />);

		expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
	});

	it("should render white arrows by default", () => {
		renderWithTheme(<GameCardSlider items={items} />);

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: theme.colors.white,
		});
		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: theme.colors.white,
		});
	});

	it("should render black arrows if color passed", () => {
		renderWithTheme(<GameCardSlider items={items} color="black" />);

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: theme.colors.black,
		});
		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: theme.colors.black,
		});
	});
});
