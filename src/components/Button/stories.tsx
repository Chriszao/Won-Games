import { type Meta, type StoryFn } from "@storybook/react";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import { Button } from ".";
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

export const Default: StoryFn = (args) => <Button {...args} />;

Default.args = {
	children: "Buy now",
};

export const WithIcon: StoryFn = (args) => <Button {...args} />;

WithIcon.args = {
	size: "small",
	children: "Buy now",
	icon: <AddShoppingCart />,
};

export const AsLink: StoryFn = (args) => <Button {...args} />;

AsLink.args = {
	size: "large",
	children: "Buy now",
	as: "a",
	href: "/link",
};
