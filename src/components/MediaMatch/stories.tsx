import { type Meta, type StoryFn } from "@storybook/react";

import { MediaMatch, type MediaMatchProps } from ".";

export default {
	title: "MediaMatch",
	component: MediaMatch,
} as Meta;

export const Desktop: StoryFn<MediaMatchProps> = () => (
	<MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Mobile: StoryFn<MediaMatchProps> = () => (
	<MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
	viewport: {
		defaultViewport: "mobile1",
	},
};
