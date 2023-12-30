import { type Meta, type StoryFn } from "@storybook/react";

import { Logo, type LogoProps } from ".";

export default {
	title: "Logo",
	component: Logo,
} as Meta;

export const Default: StoryFn<LogoProps> = (args) => <Logo {...args} />;
