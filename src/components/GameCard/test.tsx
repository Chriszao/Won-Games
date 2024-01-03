import { fireEvent, screen } from "@testing-library/react";

import { theme } from "~/styles/theme";
import { renderWithTheme } from "~/utils/tests";

import { GameCard, type GameCardProps } from ".";

describe("<GameCard />", () => {
	const props: GameCardProps = {
		developer: "Rockstar Games",
		img: "/img/game-card-img.png",
		price: "R$ 215,00",
		title: "Population Zero",
	};

	it("should render correctly", () => {
		renderWithTheme(<GameCard {...props} />);

		expect(
			screen.getByRole("heading", { name: props.title }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: props.developer }),
		).toBeInTheDocument();
		expect(screen.getByRole("img", { name: props.title })).toHaveProperty(
			"alt",
			props.title,
		);
		expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument();
	});

	it("should render price in label", () => {
		renderWithTheme(<GameCard {...props} />);

		const priceElement = screen.getByText(props.price);

		expect(priceElement).not.toHaveStyle({
			textDecoration: "line-through",
		});
		expect(priceElement).toHaveStyle({
			backgroundColor: theme.colors.secondary,
			color: theme.colors.white,
		});
	});

	it("should render a line-through in price when promotional", () => {
		renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...props} />);

		const priceElement = screen.getByText(props.price);
		const promotionalPriceElement = screen.getByText("R$ 200,00");

		expect(priceElement).toHaveStyle({
			textDecoration: "line-through",
		});

		expect(promotionalPriceElement).not.toHaveStyle({
			textDecoration: "line-through",
		});
	});

	it("should render a filled Favorite icon when is true", () => {
		renderWithTheme(<GameCard favorite {...props} />);

		expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
	});

	it("should call onFavoriteClick method when favorite is clicked", () => {
		const onFavoriteClick = jest.fn();

		renderWithTheme(
			<GameCard {...props} onFavoriteClick={onFavoriteClick} favorite />,
		);

		fireEvent.click(screen.getAllByRole("button")[0]);

		expect(onFavoriteClick).toBeCalled();
	});

	it("should render a ribbon", () => {
		renderWithTheme(
			<GameCard {...props} ribbon="20% OFF" ribbonColor="secondary" />,
		);

		const ribbon = screen.getByText(/20% OFF/i);

		expect(ribbon).toBeInTheDocument();
		expect(ribbon).toHaveStyle({
			backgroundColor: theme.colors.secondary,
			height: "2.6rem",
			fontSize: "1.2rem",
		});
	});
});
