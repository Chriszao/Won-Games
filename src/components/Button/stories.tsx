import { type Meta, type StoryFn } from "@storybook/react";

import { Button, type ButtonProps } from ".";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		children: {
			type: "string",
		},
	},
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
	children: "Buy now",
};
