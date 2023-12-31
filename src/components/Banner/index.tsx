import { Button } from "../Button";
import * as S from "./styles";

export type BannerProps = {
	img: string;
	title: string;
	subtitle: string;
	buttonLink: string;
	buttonLabel: string;
};

export function Banner({
	img,
	title,
	subtitle,
	buttonLink,
	buttonLabel,
}: BannerProps) {
	return (
		<S.Wrapper>
			<S.Image src={img} role="img" aria-label={title} />

			<S.Caption>
				<S.Title>{title}</S.Title>

				<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

				<Button as="a" size="large" href={buttonLink}>
					{buttonLabel}
				</Button>
			</S.Caption>
		</S.Wrapper>
	);
}
