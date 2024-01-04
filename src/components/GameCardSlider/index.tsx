import {
	ArrowBackIos as ArrowLeft,
	ArrowForwardIos as ArrowRight,
} from "@styled-icons/material-outlined";

import { GameCard, type GameCardProps } from "../GameCard";
import { Slider, type SliderSettings } from "../Slider";
import * as S from "./styles";

const settings: SliderSettings = {
	prevArrow: <ArrowLeft aria-label="previous games" />,
	nextArrow: <ArrowRight aria-label="next games" />,
	arrows: true,
	slidesToShow: 4,
	infinite: false,
	lazyLoad: "ondemand",
	responsive: [
		{
			breakpoint: 1375,
			settings: {
				arrows: false,
				slidesToShow: 3.2,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 2.2,
			},
		},
		{
			breakpoint: 570,
			settings: {
				arrows: false,
				slidesToShow: 1.2,
			},
		},
		{
			breakpoint: 375,
			settings: {
				arrows: false,
				slidesToShow: 1.1,
			},
		},
	],
};

export type GameCardSliderProps = {
	items: GameCardProps[];
	color?: "white" | "black";
};

export function GameCardSlider({
	items,
	color = "white",
}: GameCardSliderProps) {
	return (
		<S.Wrapper $color={color}>
			<Slider settings={settings}>
				{items.map((item, index) => (
					<GameCard key={index} {...item} />
				))}
			</Slider>
		</S.Wrapper>
	);
}
