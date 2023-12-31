import { type Meta, type StoryFn } from "@storybook/react";
import { Menu } from ".";

export default {
	title: "Menu",
	component: Menu,
} as Meta;

export const Default: StoryFn = (args) => <Menu {...args} />;
