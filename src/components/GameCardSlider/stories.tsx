import { type Meta, type StoryFn } from "@storybook/react";

import { GameCardSlider, type GameCardSliderProps } from ".";
import { type GameCardProps } from "../GameCard";

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

export default {
	title: "GameCardSlider",
	component: GameCardSlider,
	args: {
		items,
	},
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			default: "dark",
		},
	},
} as Meta;

export const Default: StoryFn<GameCardSliderProps> = (args) => (
	<div style={{ maxWidth: "130rem", margin: "0 auto" }}>
		<GameCardSlider {...args} />
	</div>
);
