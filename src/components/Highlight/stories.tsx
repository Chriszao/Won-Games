import { type Meta, type StoryFn } from "@storybook/react";

import { Highlight, type HighlightProps } from ".";

export default {
	title: "Highlight",
	component: Highlight,
	args: {
		title: "Read Dead it’s back",
		subtitle: "Come see John’s new adventures",
		buttonLabel: "Buy now",
		buttonLink: "/rdr2",
		backgroundImage: "/img/red-dead-img.jpg",
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default: StoryFn<HighlightProps> = (args) => (
	<div style={{ maxWidth: "104rem", margin: "0 auto" }}>
		<Highlight {...args} />
	</div>
);

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
	<div style={{ maxWidth: "104rem", margin: "0 auto" }}>
		<Highlight {...args} />
	</div>
);

WithFloatImage.args = {
	floatImage: "/img/red-dead-float.png",
};
