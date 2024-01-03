import { type Meta, type StoryFn } from "@storybook/react";

import { GameCard, type GameCardProps } from ".";

export default {
	title: "GameCard",
	component: GameCard,
	args: {
		img: "/img/game-card-img.png",
		title: "Population Zero",
		price: "R$ 235,00",
		developer: "Rockstar Games",
		promotionalPrice: "R$ 200,00",
	},
	argTypes: {
		onFavoriteClick: {
			action: "Clicked",
		},
		ribbon: {
			type: "string",
		},
	},
} as Meta;

export const Default: StoryFn<GameCardProps> = (args) => (
	<div style={{ width: "30rem" }}>
		<GameCard {...args} />
	</div>
);

export const WithRibbon: StoryFn<GameCardProps> = (args) => (
	<div style={{ width: "30rem" }}>
		<GameCard {...args} />
	</div>
);

WithRibbon.args = {
	ribbon: "20% OFF",
	ribbonColor: "primary",
	ribbonSize: "small",
};
