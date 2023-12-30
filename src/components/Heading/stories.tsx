import { type Meta, type StoryFn } from "@storybook/react";

import { Heading, type HeadingProps } from ".";

export default {
	title: "Heading",
	component: Heading,
	argTypes: {
		children: {
			type: "string",
		},
	},
} as Meta;

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
	children: "Most populars",
};
