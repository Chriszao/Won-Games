import { type Meta, type StoryFn } from "@storybook/react";

import { Banner, type BannerProps } from ".";

export default {
	title: "Banner",
	component: Banner,
	args: {
		img: "https://source.unsplash.com/user/willianjusten/1042x580",
		title: "Defy death",
		subtitle: "<p>Play the new <strong>Crashlands</strong> season</p>",
		buttonLink: "/games/defy-death",
		buttonLabel: "Buy now",
	},
	argTypes: {
		ribbon: {
			type: "string",
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default: StoryFn<BannerProps> = (args) => (
	<div
		style={{
			maxWidth: "104rem",
			margin: "0 auto",
		}}
	>
		<Banner {...args} />
	</div>
);

export const WithRibbon: StoryFn<BannerProps> = (args) => (
	<div style={{ maxWidth: "104rem", margin: "0 auto" }}>
		<Banner {...args} />
	</div>
);

WithRibbon.args = {
	ribbon: "20% OFF",
	ribbonSize: "normal",
	ribbonColor: "primary",
};
