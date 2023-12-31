import { Button } from "../Button";
import * as S from "./styles";

export type HighlightProps = {
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
};

export function Highlight({
	title,
	subtitle,
	buttonLabel,
	buttonLink,
}: HighlightProps) {
	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			<S.Subtitle>{subtitle}</S.Subtitle>

			<Button as="a" href={buttonLink}>
				{buttonLabel}
			</Button>
		</S.Wrapper>
	);
}
