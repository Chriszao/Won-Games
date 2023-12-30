import { type Meta, type StoryFn } from "@storybook/react";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import { Button, type ButtonProps } from ".";
export default {
	title: "Button",
	component: Button,
	argTypes: {
		children: {
			type: "string",
		},
		icon: {
			control: {
				type: "",
			},
		},
	},
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
	children: "Buy now",
};

export const WithIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
	size: "small",
	children: "Buy now",
	icon: <AddShoppingCart />,
};
