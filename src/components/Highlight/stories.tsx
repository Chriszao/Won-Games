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
	},
} as Meta;

export const Default: StoryFn<HighlightProps> = (args) => (
	<Highlight {...args} />
);
