import { type Meta, type StoryFn } from "@storybook/react";

import { BannerSlider, type BannerSliderProps } from ".";
import { type BannerProps } from "../Banner";

const items: BannerProps[] = [
	{
		img: "/img/banner-img.png",
		title: "Defy death 1",
		subtitle: "<p>Play the new <strong>Crashlands</strong> season",
		buttonLink: "/games/defy-death",
		buttonLabel: "Buy now",
		ribbon: "Bestselling",
	},
	{
		img: "/img/banner-img.png",
		title: "Defy death 2",
		subtitle: "<p>Play the new <strong>Crashlands</strong> season",
		buttonLink: "/games/defy-death",
		buttonLabel: "Buy now",
	},
	{
		img: "/img/banner-img.png",
		title: "Defy death 3",
		subtitle: "<p>Play the new <strong>Crashlands</strong> season",
		buttonLink: "/games/defy-death",
		buttonLabel: "Buy now",
	},
];

export default {
	title: "BannerSlider",
	component: BannerSlider,
	args: { items },
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			default: "dark",
		},
	},
} as Meta;

export const Default: StoryFn<BannerSliderProps> = (args) => (
	<div style={{ maxWidth: "130rem", margin: "0 auto" }}>
		<BannerSlider {...args} />
	</div>
);
